!SLIDE full-page-image

![Exploded](exploded.jpg "Exploded")

Image courtesy of [purplemattfish](http://www.flickr.com/photos/purplemattfish/3299198538/)


!SLIDE

# &lt;HTML /> #


!SLIDE full-page-image

![Scott Chacon](scott.jpg "Scott Chacon")

Image courtesy of [Fraser Speirs](http://www.flickr.com/photos/fraserspeirs/3395523242/)


!SLIDE full-page-image

![Ruby](ruby.jpg "ruby")

Image courtesy of [JOBAfunky](http://www.flickr.com/photos/jobafunky/4055955887/)


!SLIDE

# Write slides in markdown #

    ![Showing off](peafowl.jpg "Showing off")
    
    Image courtesy of [rappensuncle](http://www.flickr.com/photos/rappensuncle/146681779/)
    
    # Showing off with Ruby #
    
    ## by Joel Chippindale ##


!SLIDE

# ...and sprinkle on a bit of #

## CSS ##

    @@@ css
    .slide {
      border: 1px solid #fff;
    }

## Javascript ##

    @@@ javascript
    function showFirstSlide() {
      slidenum = 0;
      showSlide();
    }


!SLIDE

# Code highlighting #

    @@@ ruby
    require 'sinatra/base'
    
    class MyApp < Sinatra::Base
      set :sessions, true
      set :foo, 'bar'
    
      get '/' do
        'Hello world!'
      end
    end


!SLIDE

# In source control #

"Have you checked your files in note like this" http://www.flickr.com/photos/simbolism/3854554155/


!SLIDE

    @@@ diff
    diff --git a/example/bonus/bonus.md b/example/bonus/bonus.md
    index 7d359ff..3327815 100644
    --- a/example/bonus/bonus.md
    +++ b/example/bonus/bonus.md
    @@ -1,8 +1,7 @@
    -# Easy to add functionality #
    +# Customisable #

    +    @@@ javascript


!SLIDE full-page-image

![Text editor](texteditor.png "Text editor")


!SLIDE full-page-image

![Web](internet.jpg "Web")

Image courtesy of [Seb Joguet](http://www.flickr.com/photos/sebjoguet/162330937/)


!SLIDE center

<img src="opera.png" height="700" width="700" alt="Opera" />
