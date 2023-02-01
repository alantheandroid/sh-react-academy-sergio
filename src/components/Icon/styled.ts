import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { ThemeColors, ThemeFontSizes, ThemeSpacings } from '../../style/theme'

export type StyledIconProps = {
  color?: ThemeColors
  size: SizeProp
  fontSize?: number
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : 'inherit')};
`
