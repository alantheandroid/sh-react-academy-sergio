import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ThemeColors, TextVariants } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAuthBanner, StyledAuthBProps } from './styled'

type Props = Partial<StyledAuthBProps> & {
  buttonText: string
}

export const AuthBanner = ({ buttonText }: Props) => {
  return (
    <StyledAuthBanner>
      <Link to="/">
        <Image
          src="https://assets.subito.it/static/logos/corporate.svg"
          alt="Logo Subito"
          width={230}
          height={36}
        />
      </Link>
      <div className="sign-in">
        <Link color="textDark" to="/">
          <Text bold>Accedi</Text>
        </Link>
        <Link color="textDark" to="/">
          <Text>Registrati</Text>
        </Link>
        <Button
          variant="secondary"
          size="md"
          icon={'plus-square'}
          className="offer-banner-button"
        >
          {/* TODO Hardcode Inserisci Annuncio -- add notify to toggle modal open closed */}
          {buttonText}
        </Button>
      </div>
    </StyledAuthBanner>
  )
}
