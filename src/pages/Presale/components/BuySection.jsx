import { useCallback, useState } from "react";
import { parseUnits } from "ethers";
import {
  ArrowRight,
  Clock,
  Wallet,
  LockKeyhole,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import currency_icon from "../../../assets/icon_expo_currency.png";
import USDT_icon from "../../../assets/USDT.jpg";

import useWallet from "../../../web3/useWallet.js";
import usePresale from "../../../web3/usePresale.js";
import { FALLBACK_PRICE, NETWORK } from "../../../web3/config.js";
import {
  ONE,
  errorText,
  formatAmount,
  isUserRejection,
  minBig,
  shortAddress,
  toInputValue,
} from "../../../web3/format.js";
import PurchaseSuccessModal from "./PurchaseSuccessModal.jsx";
import Toasts from "./Toasts.jsx";

const DECIMAL_INPUT = /^\d*\.?\d*$/;
const TOAST_MS = 6000;

function parseAmount(value, decimals) {
  try {
    return value ? parseUnits(value, decimals) : null;
  } catch {
    return null;
  }
}

export default function BuySection() {
  const {
    walletReady,
    account,
    isCorrectChain,
    connect,
    switchNetwork,
    addToken,
  } = useWallet();
  const {
    configured,
    sale,
    user,
    loadError,
    reload,
    approveUsdt,
    buy,
    priceLabel,
  } = usePresale();

  const [payAmount, setPayAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [step, setStep] = useState("");
  const [status, setStatus] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [purchase, setPurchase] = useState(null);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const pushToast = useCallback(
    (type, title, message, hash) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, type, title, message, hash }]);
      setTimeout(() => dismissToast(id), TOAST_MS);
    },
    [dismissToast]
  );

  const closePurchase = useCallback(() => setPurchase(null), []);

  const usdtDecimals = sale?.usdtDecimals ?? 18;
  const tokenDecimals = sale?.tokenDecimals ?? 18;
  const usdtSymbol = sale?.usdtSymbol ?? "USDT";
  const tokenSymbol = sale?.tokenSymbol ?? "EXPOSE";
  const price = sale?.price ?? parseUnits(FALLBACK_PRICE, usdtDecimals);

  const payRaw = parseAmount(payAmount, usdtDecimals);
  const receiveRaw = payRaw ? (payRaw * ONE) / price : 0n;

  const remaining = sale
    ? minBig(sale.hardCap - sale.tokensSold, sale.presaleTokenBalance)
    : 0n;
  // Target follows the EXPOSE actually deposited in the presale, not the fixed hard cap.
  const totalForSale = sale ? sale.tokensSold + remaining : 0n;
  const raised = sale ? sale.usdtRaised : 0n;
  const target = sale ? raised + (remaining * sale.price) / ONE : 0n;
  const walletAllowanceLeft =
    sale && user && sale.maxPerWallet > 0n
      ? sale.maxPerWallet > user.purchased
        ? sale.maxPerWallet - user.purchased
        : 0n
      : null;
  const progressPct =
    totalForSale > 0n
      ? Math.min(100, Number((sale.tokensSold * 10000n) / totalForSale) / 100)
      : 0;
  const needsApproval = !!(user && payRaw && user.allowance < payRaw);
  const busy = step !== "";
  const saleLive = !!sale?.saleOpen;
  const showNotStarted = !configured || (!!sale && !sale.saleOpen);

  // -----------------------------------------
  // USDT -> EXPOSE
  // Example at $0.01:
  // 10 USDT / 0.01 = 1,000 EXPOSE
  // -----------------------------------------
  const setPayFromRaw = (raw) => {
    setPayAmount(toInputValue(raw, usdtDecimals));
    setReceiveAmount(toInputValue((raw * ONE) / price, tokenDecimals));
  };

  const handlePayChange = (e) => {
    const value = e.target.value.replace(",", ".");
    if (!DECIMAL_INPUT.test(value)) return;

    setPayAmount(value);
    setStatus(null);

    const raw = parseAmount(value, usdtDecimals);
    setReceiveAmount(raw ? toInputValue((raw * ONE) / price, tokenDecimals) : "");
  };

  // -----------------------------------------
  // EXPOSE -> USDT
  // Example at $0.01:
  // 1,000 EXPOSE * 0.01 = 10 USDT
  // -----------------------------------------
  const handleReceiveChange = (e) => {
    const value = e.target.value.replace(",", ".");
    if (!DECIMAL_INPUT.test(value)) return;

    setReceiveAmount(value);
    setStatus(null);

    const raw = parseAmount(value, tokenDecimals);
    setPayAmount(raw ? toInputValue((raw * price) / ONE, usdtDecimals) : "");
  };

  const handleMax = () => {
    if (!sale || !user) return;
    const maxTokens = walletAllowanceLeft === null ? remaining : minBig(remaining, walletAllowanceLeft);
    setPayFromRaw(minBig(user.usdtBalance, (maxTokens * sale.price) / ONE));
  };

  const fail = (text) => pushToast("error", "Cannot buy", text);

  const reportError = (error, cancelledTitle, failedTitle) => {
    setStatus(null);
    if (isUserRejection(error)) {
      pushToast("warning", cancelledTitle, "You cancelled the request in your wallet.");
    } else {
      pushToast("error", failedTitle, errorText(error));
    }
  };

  // -----------------------------------------
  // BUY BUTTON
  // Approves USDT first when needed, then calls buy().
  // -----------------------------------------
  const handleBuy = async () => {
    setStatus(null);

    if (!configured) return fail(loadError || "Presale contract is not configured yet.");
    if (!account) return handleConnectWallet();
    if (!isCorrectChain) return handleConnectWallet();
    if (!sale) return fail(loadError || "Presale data is still loading.");
    if (!sale.saleOpen) return fail("Presale is not live yet.");
    if (!payRaw || payRaw === 0n) return fail(`Please enter a valid ${usdtSymbol} amount.`);
    if (receiveRaw === 0n) return fail("Amount is too small.");
    if (user && payRaw > user.usdtBalance) return fail(`Insufficient ${usdtSymbol} balance.`);
    if (receiveRaw > remaining) return fail(`Not enough ${tokenSymbol} left in the presale.`);
    if (walletAllowanceLeft !== null && receiveRaw > walletAllowanceLeft) {
      return fail(
        `Wallet limit is ${formatAmount(sale.maxPerWallet, tokenDecimals)} ${tokenSymbol}. You can buy ${formatAmount(walletAllowanceLeft, tokenDecimals)} more.`
      );
    }

    let stage = "buy";
    try {
      if (needsApproval) {
        stage = "approve";
        setStep("approve");
        setStatus({ type: "info", text: `Confirm the ${usdtSymbol} approval in your wallet...` });
        const approveHash = await approveUsdt(payRaw, (hash) =>
          setStatus({ type: "info", text: "Approval submitted. Waiting for confirmation...", hash })
        );
        pushToast("success", `${usdtSymbol} approved`, "Now confirm the purchase in your wallet.", approveHash);
      }

      stage = "buy";
      setStep("buy");
      setStatus({ type: "info", text: "Confirm the purchase in your wallet..." });
      const hash = await buy(payRaw, (txHash) =>
        setStatus({ type: "info", text: "Purchase submitted. Waiting for confirmation...", hash: txHash })
      );

      setStatus(null);
      setPurchase({
        hash,
        tokenAmount: formatAmount(receiveRaw, tokenDecimals),
        tokenSymbol,
        payAmount: formatAmount(payRaw, usdtDecimals),
        usdtSymbol,
      });
      setPayAmount("");
      setReceiveAmount("");
    } catch (error) {
      if (stage === "approve") reportError(error, "Approval cancelled", "Approval failed");
      else reportError(error, "Purchase cancelled", "Purchase failed");
    } finally {
      setStep("");
      reload();
    }
  };

  // -----------------------------------------
  // CONNECT WALLET (Reown modal)
  // -----------------------------------------
  const handleConnectWallet = async () => {
    setStatus(null);

    try {
      if (!account) await connect();
      else if (!isCorrectChain) await switchNetwork();
      else if (sale) await handleAddToken();
    } catch (error) {
      reportError(
        error,
        !account ? "Connection cancelled" : "Network switch cancelled",
        !account ? "Connection failed" : "Network switch failed"
      );
    }
  };

  const handleAddToken = async () => {
    if (!sale) return;
    try {
      await addToken({
        address: sale.tokenAddress,
        symbol: sale.tokenSymbol,
        decimals: sale.tokenDecimals,
      });
    } catch (error) {
      reportError(error, "Request cancelled", "Could not add token");
    }
  };

  const walletLabel = !walletReady
    ? "Loading wallet..."
    : !account
      ? "Connect Wallet"
      : !isCorrectChain
        ? `Switch to ${NETWORK.shortName}`
        : `Add ${tokenSymbol} to Wallet`;

  const buyLabel =
    step === "approve"
      ? `Approving ${usdtSymbol}...`
      : step === "buy"
        ? "Buying..."
        : needsApproval
          ? "Approve & Buy"
          : "Buy Now";

  const saleStatus = !configured
    ? "Not configured"
    : !sale
      ? loadError
        ? "Unavailable"
        : "Loading"
      : sale.saleOpen
        ? "Live"
        : "Paused";

  const infoText = !configured
    ? "Presale has not yet launched — figures above are illustrative. Final pricing, allocation and launch conditions remain subject to final project decisions."
    : sale?.saleOpen
      ? `Presale is live on ${NETWORK.name}. Pay with ${usdtSymbol} (BEP-20) from MetaMask or any WalletConnect wallet. ${tokenSymbol} is sent to your wallet in the same transaction.`
      : "Presale is not live yet. Final pricing, allocation and launch conditions remain subject to final project decisions.";

  return (
    <section
      id="presale"
      className="
        relative
        overflow-hidden
        bg-black
        pt-8
        pb-20
        text-white
        md:pt-10
        md:pb-24
      "
    >
      {/* =====================================================
          BUY HEADER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          mb-10
          w-[min(100%-32px,1180px)]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div className="animate-fadeUp">

            {/* LABEL */}

            <div className="flex items-center gap-2 text-purple">

              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-purple
                  shadow-[0_0_12px_rgba(155,77,255,.9)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.22em]
                "
              >
                EXPOSE / PRESALE
              </span>

            </div>

            {/* TITLE */}

            <h2
             className="heading-tight mt-5 mb-[14px]   animate-fadeUp uppercase text-[clamp(34px,6vw,68px)] leading-[.93] text-white"
            >
              Get in{" "}
              <span className="text-purple">
                early.
              </span>
            </h2>

          </div>
        </div>
      </div>


      {/* =====================================================
          TERMINAL
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-[min(100%-32px,680px)]
          animate-fadeUp
          [animation-delay:.18s]
        "
      >

        {/* OUTER GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-6
            rounded-[28px]
            bg-purple/[0.055]
            blur-[55px]
            animate-pulseSlow
          "
        />

        {/* ANIMATED BORDER */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-px
            rounded-[12px]
            bg-gradient-to-r
            from-transparent
            via-purple/40
            to-transparent
            opacity-70
            animate-borderFlow
          "
        />

        {/* CARD */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[11px]
            border
            border-white/[0.09]
            bg-[#08080b]/95
            shadow-[0_30px_100px_rgba(0,0,0,.65)]
            backdrop-blur-md
          "
        >

          {/* TOP LINE */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-[2px]
              overflow-hidden
              bg-purple/20
            "
          >
            <span
              className="
                absolute
                inset-y-0
                left-[-30%]
                w-[30%]
                bg-purple
                shadow-[0_0_18px_rgba(155,77,255,.9)]
                animate-cardLine
              "
            />
          </div>


          {/* HOVER GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-purple/[0.055]
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-700
              group-hover:opacity-100
            "
          />


          <div className="relative p-5 sm:p-7 md:p-8">

            {/* =================================================
                HEADER
            ================================================== */}

            <div className="flex items-center justify-between">

              <div>

                <span
                  className="
                    block
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[.2em]
                    text-[#68646f]
                  "
                >
                  Presale Terminal
                </span>

                <h3
                  className="
                    mt-1
                    text-[15px]
                    font-bold
                    uppercase
                    tracking-[.08em]
                    text-white
                  "
                >
                  Buy {tokenSymbol}
                </h3>

              </div>

              <div className="flex flex-col items-end gap-1 text-right">
                <span
                  className={`
                    rounded-full
                    border
                    px-2.5
                    py-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[.16em]
                    ${
                      saleStatus === "Live"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border-white/[0.1] bg-white/[0.03] text-[#77737e]"
                    }
                  `}
                >
                  {saleStatus}
                </span>
                {account && (
                  <span className="text-[9px] tracking-[.06em] text-[#77737e]">
                    {shortAddress(account)}
                  </span>
                )}
              </div>

            </div>


            {/* =================================================
                PRICE
            ================================================== */}

            <div
              className="
                relative
                mt-6
                overflow-hidden
                rounded-[8px]
                border
                border-purple/[0.18]
                bg-purple/[0.045]
                px-5
                py-5
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-purple/[0.12]
                  blur-[35px]
                "
              />

              <div className="relative flex items-center justify-between">

                <div>

                  <span
                    className="
                      block
                      text-[8px]
                      uppercase
                      tracking-[.17em]
                      text-[#6f6a77]
                    "
                  >
                    Current planning rate
                  </span>

                  <div className="mt-1 flex items-baseline gap-2">

                    <strong
                      className="
                        text-[27px]
                        font-bold
                        tracking-[-.04em]
                        text-white
                      "
                    >
                      ${priceLabel}
                    </strong>

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[.1em]
                        text-[#77737e]
                      "
                    >
                      / {tokenSymbol}
                    </span>

                  </div>

                </div>


               

              </div>

            </div>


            {/* =================================================
                PROGRESS
            ================================================== */}

            <div className="mt-6">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  text-[9px]
                  uppercase
                  tracking-[.1em]
                "
              >

                <span className="text-[#6f6a77]">
                  Raised

                  <b className="ml-1 text-[#d8d5dc]">
                    {sale ? formatAmount(raised, usdtDecimals, 2) : "0"} {usdtSymbol}
                  </b>
                </span>

                <span className="text-[#6f6a77]">
                  Target

                  <b className="ml-1 text-[#d8d5dc]">
                    {sale ? formatAmount(target, usdtDecimals, 2) : "1,500,000"} {usdtSymbol}
                  </b>
                </span>

              </div>


              <div
                className="
                  relative
                  mt-3
                  h-[6px]
                  overflow-hidden
                  rounded-full
                  bg-white/[0.07]
                "
              >

                <span
                  className="
                    relative
                    block
                    h-full
                    rounded-full
                    bg-purple
                    shadow-[0_0_12px_rgba(155,77,255,.65)]
                    transition-[width]
                    duration-1000
                    ease-out
                  "
                  style={{
                    width: `${progressPct}%`,
                  }}
                />

                <span
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-[90px]
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    animate-progressShine
                  "
                />

              </div>


              <div
                className="
                  mt-2
                  flex
                  justify-between
                  text-[8px]
                  uppercase
                  tracking-[.12em]
                  text-[#57525f]
                "
              >

                <span>
                  {progressPct > 0 && progressPct < 1
                    ? progressPct.toFixed(2)
                    : progressPct.toFixed(0)}% funded
                </span>

                <span>
                  {sale
                    ? `${formatAmount(remaining, tokenDecimals, 0)} ${tokenSymbol} left`
                    : "Presale target"}
                </span>

              </div>


              {/* SALE STATS */}

              {sale && (
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    ["Tokens sold", `${formatAmount(sale.tokensSold, tokenDecimals, 0)}`],
                    ["For sale", `${formatAmount(totalForSale, tokenDecimals, 0)}`],
                    [
                      "Wallet limit",
                      sale.maxPerWallet > 0n
                        ? formatAmount(sale.maxPerWallet, tokenDecimals, 0)
                        : "No limit",
                    ],
                    ["You bought", user ? formatAmount(user.purchased, tokenDecimals, 0) : "—"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[7px] border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
                    >
                      <span className="block text-[8px] uppercase tracking-[.14em] text-[#5f5b65]">
                        {label}
                      </span>
                      <b className="mt-1 block truncate text-[12px] font-semibold text-[#d8d5dc]">
                        {value}
                      </b>
                    </div>
                  ))}
                </div>
              )}

            </div>


            {/* =================================================
                INPUTS
            ================================================== */}

            <div className="mt-7 space-y-4">

              {/* PAY */}

              <div>

                <div className="flex items-center justify-between">

                  <label
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      text-[#aaa6b0]
                    "
                  >
                    Amount you pay
                  </label>

                  <span className="flex items-center gap-2 text-[8px] text-[#5f5b65]">
                    Balance ={" "}
                    {user ? formatAmount(user.usdtBalance, usdtDecimals) : "0"}{" "}
                    {usdtSymbol}
                    {user && (
                      <button
                        type="button"
                        onClick={handleMax}
                        className="font-bold uppercase tracking-[.1em] text-purple hover:text-[#ad69ff]"
                      >
                        Max
                      </button>
                    )}
                  </span>

                </div>


                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    rounded-[7px]
                    border
                    border-white/[0.09]
                    bg-[#0d0d11]
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:border-white/[0.15]
                    focus-within:border-purple/60
                    focus-within:bg-[#101016]
                    focus-within:shadow-[0_0_0_3px_rgba(155,77,255,.07),0_0_25px_rgba(155,77,255,.06)]
                  "
                >

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-white/[0.07]
                    "
                  >
                    <img
                      src={USDT_icon}
                      alt="USDT"
                      className="
                        h-full
                        w-full
                        rounded-full
                        object-cover
                      "
                    />
                  </div>


                  <input
                    type="text"
                    value={payAmount}
                    onChange={handlePayChange}
                    placeholder="Enter USDT amount"
                    inputMode="decimal"
                    className="
                      w-full
                      border-0
                      bg-transparent
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      placeholder:text-[#4f4b55]
                    "
                  />


                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[.1em]
                      text-[#77737e]
                    "
                  >
                    USDT
                  </span>

                </div>

              </div>


              {/* SWAP */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  py-1
                "
              >

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    h-px
                    bg-white/[0.07]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.1]
                    bg-[#08080b]
                    text-purple
                    shadow-[0_0_20px_rgba(155,77,255,.12)]
                    animate-swapPulse
                  "
                >
                  <ArrowRight
                    size={12}
                    className="rotate-90"
                  />
                </div>

              </div>


              {/* RECEIVE */}

              <div>

                <div className="flex items-center justify-between">

                  <label
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      text-[#aaa6b0]
                    "
                  >
                    Amount you get
                  </label>

                  <span className="text-[8px] text-[#5f5b65]">
                    Balance ={" "}
                    {user ? formatAmount(user.tokenBalance, tokenDecimals) : "0.00"}{" "}
                    {tokenSymbol}
                  </span>

                </div>


                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    rounded-[7px]
                    border
                    border-white/[0.09]
                    bg-[#0d0d11]
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:border-white/[0.15]
                    focus-within:border-purple/60
                    focus-within:bg-[#101016]
                    focus-within:shadow-[0_0_0_3px_rgba(155,77,255,.07),0_0_25px_rgba(155,77,255,.06)]
                  "
                >

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-purple/[0.1]
                    "
                  >
                    <img
                      src={currency_icon}
                      alt="EXPOSE"
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>


                  <input
                    type="text"
                    value={receiveAmount}
                    onChange={handleReceiveChange}
                    placeholder="Enter EXPOSE amount"
                    inputMode="decimal"
                    className="
                      w-full
                      border-0
                      bg-transparent
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      placeholder:text-[#4f4b55]
                    "
                  />


                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[.1em]
                      text-purple
                    "
                  >
                    EXPOSE
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >

              {/* CONNECT WALLET */}

              <button
                type="button"
                onClick={handleConnectWallet}
                disabled={!walletReady || busy}
                className="
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  group/btn
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[6px]
                  border
                  border-white/[0.1]
                  bg-white/[0.025]
                  px-5
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.1em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-purple/30
                  hover:bg-purple/[0.06]
                "
              >

                <Wallet
                  size={16}
                  className="
                    text-purple
                    transition-transform
                    duration-300
                    group-hover/btn:scale-110
                  "
                />

                {walletLabel}

              </button>


              {/* BUY */}

              <button
                type="button"
                onClick={handleBuy}
                disabled={busy || !saleLive}
                title={!saleLive && !busy ? "Presale has not started yet" : undefined}
                className={`
                  ${busy ? "disabled:cursor-wait disabled:opacity-70" : "disabled:cursor-not-allowed disabled:opacity-40"}
                  disabled:shadow-none
                  disabled:hover:bg-purple
                  disabled:hover:shadow-none
                  disabled:active:scale-100
                  group/buy
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-[6px]
                  bg-purple
                  px-5
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.1em]
                  text-white
                  shadow-[0_0_25px_rgba(155,77,255,.14)]
                  transition-all
                  duration-300
                  hover:bg-[#ad69ff]
                  hover:shadow-[0_0_40px_rgba(155,77,255,.32)]
                  active:scale-[.98]
                `}
              >

                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[80%]
                    w-[45%]
                    skew-x-[-20deg]
                    bg-white/25
                    transition-all
                    duration-700
                    group-hover/buy:left-[130%]
                    group-disabled/buy:hidden
                  "
                />

                <span className="relative">
                  {buyLabel}
                </span>

                <ArrowRight
                  size={16}
                  className="
                    relative
                    transition-transform
                    duration-300
                    group-hover/buy:translate-x-1
                    group-disabled/buy:translate-x-0
                  "
                />

              </button>

            </div>


            {/* =================================================
                NOT STARTED NOTICE
            ================================================== */}

            {showNotStarted && (
              <div
                role="status"
                className="
                  mt-4
                  flex
                  items-start
                  gap-3
                  rounded-[8px]
                  border
                  border-purple/[0.2]
                  bg-purple/[0.05]
                  px-4
                  py-3
                "
              >
                <Clock size={15} className="mt-0.5 shrink-0 text-purple" />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white">
                    Presale has not started yet
                  </p>
                  <p className="mt-1 text-[11px] leading-[1.6] text-[#8a8592]">
                    Buying will open as soon as the presale goes live. You can connect your wallet in the meantime.
                  </p>
                </div>
              </div>
            )}


            {/* =================================================
                STATUS
            ================================================== */}

            {(status || (configured && loadError)) && (
              <p
                className={`
                  mt-4
                  text-[11px]
                  leading-[1.6]
                  ${
                    status?.type === "success"
                      ? "text-emerald-300"
                      : status?.type === "info"
                        ? "text-[#aaa6b0]"
                        : "text-red-400"
                  }
                `}
              >
                {status ? status.text : loadError}
                {status?.hash && (
                  <a
                    href={`${NETWORK.explorer}/tx/${status.hash}`}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 font-bold text-purple hover:text-[#ad69ff]"
                  >
                    View transaction
                  </a>
                )}
              </p>
            )}

            {saleLive && needsApproval && !busy && !status && (
              <p className="mt-4 text-[11px] leading-[1.6] text-[#5c5862]">
                Your wallet will ask twice: first to approve {usdtSymbol}, then to confirm the purchase.
              </p>
            )}


            {/* =================================================
                FOOTER
            ================================================== */}

            <div
              className="
                mt-6
                border-t
                border-white/[0.07]
                pt-5
              "
            >

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                  "
                >
                  <LockKeyhole
                    size={12}
                    className="text-purple"
                  />
                </div>


                <div>

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[.14em]
                        text-[#77737e]
                      "
                    >
                      Presale information
                    </span>

                    <ShieldCheck
                      size={11}
                      className="text-[#5d5864]"
                    />

                  </div>


                  <p
                    className="
                      mt-1
                      text-[11px]
                      leading-[1.7]
                      text-[#5c5862]
                    "
                  >
                    {infoText}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <PurchaseSuccessModal
        purchase={purchase}
        onClose={closePurchase}
        onAddToken={handleAddToken}
      />

      <Toasts toasts={toasts} onDismiss={dismissToast} />

    </section>
  );
}
 