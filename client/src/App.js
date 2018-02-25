import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'

class App extends Component {
  constructor () {
    super()
    this.state = {
      hover: false,
      sidebar: false
    }

    this.openSideBar = this.openSideBar.bind(this)
    this.closeSideBar = this.closeSideBar.bind(this)
    this.hoverIn = this.hoverIn.bind(this)
    this.hoverOut = this.hoverOut.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }

  componentDidMount () {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }

  componentWillUnmount () {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  scrollTo () {
    const top = this.sectionB.offsetTop
    scroll.scrollTo(top)
  }

  openSideBar () {
    this.setState({
      sidebar: true
    })
  }

  closeSideBar () {
    this.setState({
      sidebar: false
    })
  }

  hoverIn () {
    this.setState({
      hover: true
    })
  }

  hoverOut () {
    this.setState({
      hover: false
    })
  }

  render () {
    const { hover, sidebar } = this.state
    const { hoverIn, hoverOut } = this

    const sidestyle = {
      width: `${sidebar ? '60vw' : 0}`,
      minWidth: `${sidebar ? 240 : 0}`
    }

    return (
      <div className='wrapper'>
        <aside className={`sidebar${sidebar ? ' open' : ''}`}
          style={sidestyle}>
          <img src='./images/xxx.svg'
            className='close-side-bar' 
            onClick={this.closeSideBar}/>
        </aside>
        <div className='main'>
          <nav>
            <div className={`burger${hover ? ' burger-hover' : ''}`}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              onClick={this.openSideBar}>
              <div className={`burger-row${hover ? ' active' : ''}`} />
              <div className={`burger-row${hover ? ' active' : ''}`} />
              <div className={`burger-row${hover ? ' active' : ''}`} />
            </div>
          </nav>
          <header>
            <div>
              <object
                className='logo'
                data='./images/minds.svg'
                type='image/svg+xml'
                alt='brains' />
            </div>
            <h1>brainsync</h1>
          </header>
          <img
            className='chevron'
            src='./images/chev.svg'
            alt='chevron' 
            onClick={this.scrollTo} />
        </div>
        <div
          ref={node => {
            this.sectionB = node
          }}
          className='next'>
          <div className='opportunities'>
            <div className='opp'>
              <h3>Synchronize Mental Acitivity</h3>
              <small>LEARN MORE</small>
            </div>
            <div className='opp'>
              <h3>Never Be Alone Again</h3>
              <small>FIND OUT HOW</small>
            </div>
            <div className='opp'>
              <h3>Help Scientists</h3>
              <small>GIVE US A CALL</small>
            </div>
            <div className='opp'>
              <h3>Incredibly Well-Funded</h3>
              <small>DETAILS</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
