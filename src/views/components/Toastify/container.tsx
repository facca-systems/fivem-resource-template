import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useNuiMessage } from '@app/hooks/useNuiMessage';
import { debugData } from '@app/utils/debugData';

import { Toastify, ToastifyProps } from '.';

export function ToastifyContainer() {
  const [toastifys, setToastifys] = useState<ToastifyProps[]>([]);

  useNuiMessage('addToastify', (data: Omit<ToastifyProps, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);

    setToastifys((prevState) => prevState.concat({ ...data, id }));
  });

  useEffect(() => {
    debugData([
      {
        action: 'addToastify',
        payload: {
          text: 'Toastify added successfully!',
          type: 'success',
        },
      },
      {
        action: 'addToastify',
        payload: {
          text: 'Toastify added successfully!',
          type: 'error',
        },
      },
    ]);
  }, []);

  return createPortal(
    <div className="top-[15.625rem] right-[3.125rem] absolute flex flex-col gap-[.3125rem] z-[999]">
      {toastifys.length > 0 &&
        toastifys.map((data) => (
          <Toastify
            key={data.id}
            onRemoveNotify={(id) =>
              setToastifys((prevState) =>
                prevState.filter((toast) => toast.id !== id),
              )
            }
            id={data.id}
            text={data.text}
            time={data.time}
            type={data.type}
          />
        ))}
    </div>,
    document.getElementById('toastify-container')!,
  );
}
