import React, { useEffect, useState } from 'react'
import useKeypress from '../../lib/use-keypress'
/* eslint no-tabs: ["warn", { allowIndentationTabs: true }] */

// TODO
// [x] On first load, load vocab from `vocab_list.js`
// [x] Show vocab
// [x] Filter out `hide` words (in future toggle based on time of day)
// [x] Delay English? Maybe by like 5-10 seconds
// [x] Modify vocab_list to include difficulty (start at 5)
// [x] Add buttons to modify difficulty (Easy, Hard)
// [x] Add ability to save/load vocab w/ difficulty
// [x] Move a term to end of array after using
// [] Show most difficult words first unless you've seen them in the last 10 minutes (add timestamp)

import vocabList from './vocab_list'
const firstVocab = vocabList.nextVocab()

const Vocab = () => {
  const [vocab, setVocab] = useState(firstVocab)
  const [showEnglish, setShowEnglish] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  const startShowAnswerTimer = function () {
    const id = setTimeout(() => setShowEnglish(true), 10000)

    clearTimeout(timeoutId)
    setTimeoutId(id)
    console.log('setting timeoutId', id, timeoutId)
  }

  useEffect(startShowAnswerTimer, [vocab])

  const nextWord = () => {
    setVocab(vocabList.nextVocab())
    setShowEnglish(false)
  }

  const handleEasy = () => {
    vocabList.markEasy()
    nextWord()
  }

  const handleHard = () => {
    vocabList.markHard()
    nextWord()
  }

  const showAnswer = () => {
    setShowEnglish(true)
  }

  useKeypress('1', handleHard)
  useKeypress('2', handleEasy)
  useKeypress('3', showAnswer)
  useKeypress(' ', showAnswer)

  const nonBreakingSpace = '\u00a0'
  return (
    <div className='text-center'>
      <h2 className='display-3'>{vocab.latin}</h2>
      <h5>
        {vocab.hint && vocab.hint} ({vocab.difficulty})
      </h5>
      <h3>{showEnglish ? vocab.english : nonBreakingSpace}</h3>
      <button className='btn btn-danger' onClick={handleHard}>
        Hard
      </button>
      <button className='btn btn-success mx-2' onClick={handleEasy}>
        Easy
      </button>
      <button className='btn btn-secondary' onClick={showAnswer}>
        Show Answer
      </button>
    </div>
  )
}

export default Vocab
