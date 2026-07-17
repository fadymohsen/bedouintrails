"use client";

import Swal from "sweetalert2";

const BRAND_COLOR = "#CF9050";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const sweetAlert = {
  success: (title: string, text?: string) =>
    Swal.fire({ icon: "success", title, text, timer: 2000, showConfirmButton: false }),

  error: (title: string, text?: string) =>
    Swal.fire({ icon: "error", title, text, confirmButtonColor: BRAND_COLOR }),

  warning: (title: string, text?: string) =>
    Swal.fire({ icon: "warning", title, text, confirmButtonColor: BRAND_COLOR }),

  info: (title: string, text?: string) =>
    Swal.fire({ icon: "info", title, text, confirmButtonColor: BRAND_COLOR }),

  confirm: (title: string, text?: string, confirmText = "Yes", cancelText = "Cancel") =>
    Swal.fire({
      icon: "question",
      title,
      text,
      showCancelButton: true,
      confirmButtonColor: BRAND_COLOR,
      cancelButtonColor: "#aaa",
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    }),

  toast: {
    success: (title: string) => Toast.fire({ icon: "success", title }),
    error: (title: string) => Toast.fire({ icon: "error", title }),
    warning: (title: string) => Toast.fire({ icon: "warning", title }),
    info: (title: string) => Toast.fire({ icon: "info", title }),
  },
};

export default sweetAlert;
