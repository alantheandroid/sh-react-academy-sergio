import { Icon } from '../Icon'
import { StyledRating, StyledRatingProps } from './styled'

type Props = Partial<StyledRatingProps> & {
  score: number
}

export const Rating = ({ score }: Props) => {
  const roundScore = Math.ceil(score / 0.5) * 0.5
  const maxScore = 5
  const fullStars = Math.trunc(roundScore)

  const drawStars = (roundScore: number, maxScore: number, fullStars: number) => {
    const starsArray = Array(maxScore)
      .fill(['far', 'star'])
      .fill(['fas', 'star'], 0, fullStars)
    if (roundScore % 1 !== 0) {
      starsArray[fullStars] = ['fas', 'star-half-alt']
    }
    return starsArray
  }

  const totalRating = drawStars(roundScore, maxScore, fullStars)

  return (
    <StyledRating>
      {totalRating.map((star, index) => {
        return <Icon size="1x" icon={star} key={'star' + index} />
      })}
    </StyledRating>
  )
}
