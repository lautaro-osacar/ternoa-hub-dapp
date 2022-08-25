import { TButtonSize, IButton, TButtonType } from "./types"
import Text from '../Text'
import { IText } from "../Text/types"

const getButtonSize = (size: TButtonSize) => {
  switch (size) {
    case 'large':
      return 'md:min-w-240 lg:min-w-240 xl:min-w-240 h-s56'
    case 'medium':
      return 'md:min-w-184 lg:min-w-184 xl:min-w-184 h-s48'
    case 'small':
      return 'md:min-w-144 lg:min-w-144 xl:min-w-144 h-s40'
  }
}

const getButtonType = (type: TButtonType, disabled: boolean) => {
  switch (type) {
    case 'primary':
      return !disabled ? 'bg-gray-800 hover:bg-gray-900 hover:shadow-xl focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out' : 'bg-gray-200'
    case 'secondary':
      return 'bg-white-default border-2 border-gray-800 hover:bg-gray-100 hover:border-gray-900 hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:border-gray-100 active:shadow-lg transition duration-150 ease-in-out'
    case 'danger':
      return 'bg-red-200 hover:border-2 hover:border-red-300 hover:shadow-lg hover:shadow-red-200 focus:shadow-lg focus:outline-none focus:ring-0 active:border-red-300 active:shadow-lg transition duration-150 ease-in-out'
  }
}

const getTextProps = (type: TButtonType, size: TButtonSize, text: string, disabled: boolean): IText => {

  const textType = size === 'large' ? 'p1' : 'p3'

  switch (type) {
    case 'primary':
      return { text, type: textType, weight: 'medium', color: disabled ? 'text-gray-400' : 'text-white-default' }
    case 'secondary':
      return { text, type: textType, weight: 'medium', color: 'text-gray-800' }
    case 'danger':
      return { text, type: textType, weight: 'medium', color: 'text-red-400' }
  }
}

const Card: React.FC<IButton> = ({ text, size, type, disabled = false }) => {
  return (
    <button
      type="button"
      disabled
      className={`inline-block xs:min-w-[100%] sm:min-w-[100%] ${getButtonSize(size)} ${getButtonType(type, disabled)} px-s56 text-center whitespace-nowrap leading-tight rounded-lg shadow-md cursor-pointer`}
    >
      <Text {...getTextProps(type, size, text, disabled)} />
    </button>
  )
}

export default Card