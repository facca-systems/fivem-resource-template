import { animated, SpringValue } from '@react-spring/web';
import { useEffect } from 'react';

export type ToastifyProps = {
  id: string;
  type: 'success' | 'error';
  text: string;
  time: number;
};

const TypeVariants = {
  success: 'rgb(2, 141, 7)',
  error: 'rgb(249, 47, 96)',
};

const IconVariants = {
  success: <SuccessSvg />,
  error: <ErrorSvg />,
};

export function Toastify({
  id,
  text,
  time,
  type,
  onRemoveNotify,
  style,
}: ToastifyProps & {
  style: { transform: SpringValue<string>; opacity: SpringValue<number> };
  onRemoveNotify: (notifyId: string) => void;
}) {
  useEffect(() => {
    const intervalId = setTimeout(() => {
      onRemoveNotify(id);
    }, time ?? 5000);

    return () => clearTimeout(intervalId);
  }, [time, id, onRemoveNotify]);

  return (
    <animated.div
      style={style}
      className="w-[17.5625rem] min-h-[2.9375rem] h-fit px-[.9375rem] pt-[.625rem] flex flex-col items-center relative bg-white/90 rounded-[.125rem] border border-white border-solid"
    >
      <animated.div
        style={style}
        className="flex items-center gap-[.375rem] w-full mb-[.8125rem]"
      >
        {IconVariants[type] ?? <SuccessSvg />}

        <animated.span
          className="text-sm"
          style={{ ...style, color: TypeVariants[type] ?? 'rgb(2, 141, 7)' }}
        >
          {text}aaaaaaaaa
        </animated.span>
      </animated.div>

      <animated.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[15.6875rem] h-[.1875rem] bg-black/10 rounded-[.125rem]">
        <div
          className="h-full"
          style={{
            width: '0%',
            background: TypeVariants[type] ?? 'rgb(2, 141, 7)',
            animation: `progress ${time ?? 5000}ms linear`,
          }}
        />
      </animated.div>
    </animated.div>
  );
}

function SuccessSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#028D07"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5 13 4 4L19 7"
      />
    </svg>
  );
}

function ErrorSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F92F60"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5 5 14 14M5 19 19 5"
      />
    </svg>
  );
}
