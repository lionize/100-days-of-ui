import React from 'react'
import Logo from 'components/Logo'

const Review = ({data, transition}) => (
  <div>
    <header className="mb-8 pb-4 border-b border-solid border-purple-dark">
      <div className="w-48 m-auto">
        <Logo animate={true} fast={true} />
      </div>
    </header>
    <div>
      <div className="mb-8 max-w-sm">
        <p className="text-body">
          Thanks for checking out Registratr. It was created as part of{' '}
          <a href="http://www.dailyui.co/" target="_blank">
            100 Days of UI
          </a>. You can view the source{' '}
          <a
            href="https://github.com/lionize/100-days-of-ui/tree/master/01"
            target="_blank">
            on my GitHub
          </a>. I'd love to hear some feedback on this design; you can reach me
          on Twitter at{' '}
          <a href="https://twitter.com/grow_love" target="_blank">
            @grow_love
          </a>.
        </p>
        <p className="text-body">
          I'd also like to give a shout-out to the following projects which were
          used to make this design:
        </p>
        <ul className="shout-out">
          <li>
            <a href="https://github.com/facebook/react" target="_blank">
              React
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </li>
          <li>
            <a href="https://github.com/davidkpiano/xstate" target="_blank">
              xstate
            </a>
          </li>
          <li>
            <a href="https://hundredrabbits.itch.io/dotgrid" target="_blank">
              dotgrid
            </a>
          </li>
          <li>
            <a href="https://www.heropatterns.com/" target="_blank">
              Hero Patterns
            </a>
          </li>
          <li>
            <a href="http://www.zondicons.com/" target="_blank">
              Zondicons
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Review
