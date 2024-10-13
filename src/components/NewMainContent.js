import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

const db = [
  {
    ava: 'https://jabarekspres.com/wp-content/uploads/2023/09/jung-haein.jpeg',
    name: 'Jung Hae In',
    age: '18',
    address: 'Korea',
    img: 'https://cdn.tatlerasia.com/tatlerasia/i/2021/12/27160400-jung-hae-in-snowdrop_cover_1240x829.jpeg'
  },
  {
    ava: 'https://jabarekspres.com/wp-content/uploads/2023/09/jung-haein.jpeg',
    name: 'Jung Hae In 2',
    age: '18',
    address: 'Korea',
    img: 'https://cdn.tatlerasia.com/tatlerasia/i/2021/12/27160400-jung-hae-in-snowdrop_cover_1240x829.jpeg'
  },
  {
    ava: 'https://jabarekspres.com/wp-content/uploads/2023/09/jung-haein.jpeg',
    name: 'Jung Hae In 3',
    age: '18',
    address: 'Korea',
    img: 'https://cdn.tatlerasia.com/tatlerasia/i/2021/12/27160400-jung-hae-in-snowdrop_cover_1240x829.jpeg'
  },
  {
    ava: 'https://jabarekspres.com/wp-content/uploads/2023/09/jung-haein.jpeg',
    name: 'Jung Hae In 4',
    age: '18',
    address: 'Korea',
    img: 'https://cdn.tatlerasia.com/tatlerasia/i/2021/12/27160400-jung-hae-in-snowdrop_cover_1240x829.jpeg'
  },
  {
    ava: 'https://jabarekspres.com/wp-content/uploads/2023/09/jung-haein.jpeg',
    name: 'Jung Hae In 5',
    age: '18',
    address: 'Korea',
    img: 'https://cdn.tatlerasia.com/tatlerasia/i/2021/12/27160400-jung-hae-in-snowdrop_cover_1240x829.jpeg'
  }
]

function NewMainContent () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.ava + ')' }} className='card'>
              <h3>{character.name}</h3>
              <h3>{character.age}</h3>
              <h3>{character.address}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default NewMainContent