import React from 'react'
import CloseButton from './CloseButton'

const Modal = ({close}) => (
  <div className="max-w-104 px-6 pt-6 pb-8 bg-purple-lightest text-purple-darker rounded shadow-md font-light relative">
    <div onClick={close} className="btn-close">
      <CloseButton />
    </div>
    <h1 className="text-xl mb-6 text-purple-dark">Hey there!</h1>
    <div className="leading-normal">
      <p className="mb-4">
        My name is Mark and I'm a front-end developer looking to become as
        competent at design as I am at development, so I'd love to hear any
        feedback you might have on this{' '}
        <a href="http://www.dailyui.com/">100 Days of UI</a> design. You can
        reach me on Twitter at{' '}
        <a href="https://twitter.com/grow_love">@grow_love</a>. The source for
        this project is also available{' '}
        <a href="https://github.com/lionize/100-days-of-ui/tree/master/02">
          on my GitHub
        </a>.
      </p>
      <p className="mb-3">
        A couple of shout-outs to projects used to make this design:
      </p>
      <ul>
        <li>
          <a href="http://tailwindcss.com/">TailwindCSS</a>
        </li>
        <li>
          <a href="http://nerdcave.com/tailwind-cheat-sheet">
            Tailwind Cheat Sheet
          </a>
        </li>
        <li>
          <a href="https://www.heropatterns.com/">Hero Patterns</a>
        </li>
        <li>
          <a href="http://www.zondicons.com/">Zondicons</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Modal
