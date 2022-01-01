import { colors } from '@styles/design-tokens'

export const FacebookIcon = ({ fillColor, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.6665H7.50004C6.39497 1.6665 5.33516 2.10549 4.55376 2.88689C3.77236 3.66829 3.33337 4.7281 3.33337 5.83317V8.33317H0.833374V11.6665H3.33337V18.3332H6.66671V11.6665H9.16671L10 8.33317H6.66671V5.83317C6.66671 5.61216 6.75451 5.4002 6.91079 5.24392C7.06707 5.08763 7.27903 4.99984 7.50004 4.99984H10V1.6665Z"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
