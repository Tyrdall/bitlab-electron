;(window.navigation = window.navigation || {}),
  (function(n) {
    let navigation = {
      constants: {
        sectionTemplate: '.section-template',
        contentContainer: '#content',
        startSectionMenuItem: '#welcome-menu',
        startSection: '#welcome',
      },

      importSectionsToDOM: function() {
        const links = document.querySelectorAll('link[rel="import"]')
        Array.prototype.forEach.call(links, function(link) {
          let template = link.import.querySelector(
            navigation.constants.sectionTemplate
          )
          let clone = document.importNode(template.content, true)
          document
            .querySelector(navigation.constants.contentContainer)
            .appendChild(clone)
        })
      },

      setMenuOnClickEvent: function() {
        document.body.addEventListener('click', function(event) {
          if (event.target.dataset.section) {
            navigation.hideAllSections()
            navigation.showSection(event)
          }
        })
      },

      showSection: function(event) {
        const sectionId = event.target.dataset.section
        $('#' + sectionId).show()
        $('#' + sectionId + ' section').show()
      },

      showStartSection: function() {
        $(this.constants.startSectionMenuItem).click()
        $(this.constants.startSection).show()
        $(this.constants.startSection + ' section').show()
      },

      hideAllSections: function() {
        $(this.constants.contentContainer + ' section').hide()
      },

      init: function() {
        this.importSectionsToDOM()
        this.setMenuOnClickEvent()
        this.showStartSection()
      },
    }

    n(function() {
      navigation.init()
    })
  })(jQuery)
