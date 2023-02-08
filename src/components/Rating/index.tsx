/* eslint-disable prettier/prettier */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon'

type RatingProps = {
  rating?: number
}

export const Rating = ({ rating = 4 }: RatingProps) => {
  return (
    <div>
      {'starr'.split('').map((_, index: number) => {
        const currStar = index + 1
        const icon: IconProp =
          currStar < rating || (currStar - rating < 0.5)
            ? ['fas', 'star']
            : currStar > rating && (currStar - rating >= 0.5 && currStar - rating < 1)
              ? ['fas', 'star-half-alt']
              : ['far', 'star']
        return <Icon key={Date.now() * Math.random()} fontSize='lg' color='gold' icon={icon} size="1x" />
      })}
    </div>
  )
}