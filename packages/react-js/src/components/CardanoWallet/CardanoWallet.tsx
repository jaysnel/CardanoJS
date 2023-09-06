interface CardanoWalletProps {
  buttonText?: string,
  customCSS?: string,
  buttonFunction?: (params: any) => void,
}

export default function CardanoWallet({buttonText, customCSS, buttonFunction}: CardanoWalletProps) {
  const cardanoButtonText = 'Connect Wallet';
  const connectToWallet = () => {
    alert('Cardano Button Clicked')
  }

  return (
    <button onClick={() => {buttonFunction || connectToWallet()}}>{buttonText || cardanoButtonText}</button>
  )
}
