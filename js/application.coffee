# application coffeescript goes here

class @Slider
  constructor: (container)->
    @container = $(container)
    @countContainer = $('.controls .count')
    @totalSlides = @container.find('.listing').length
    @button_next = $('.controls a#next')
    @button_prev = $('.controls a#prev')

    @container.find('> li.listing:first-child').addClass 'active'

    @button_next.on 'click', @next
    @button_prev.on 'click', @prev

  next: (e)=>
    e.preventDefault()
    current = @container.find 'li.active'
    if current.next().length > 0
      current.next().addClass 'active'
      @countContainer.text(parseInt(@countContainer.text()) + 1)
    else
      @container.find('> li.listing:first-child').addClass 'active'
      @countContainer.text('1')
    current.removeClass 'active'


  prev: (e)=>
    e.preventDefault()
    current = @container.find 'li.active'
    if current.prev().length > 0
      current.prev().addClass 'active'
      @countContainer.text(parseInt(@countContainer.text()) - 1)
    else
      @container.find('> li.listing:last-child').addClass 'active'
      @countContainer.text(@totalSlides)
    current.removeClass 'active'
