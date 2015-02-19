# pw-animate-js

pw-animate-js is a pretty small (html4) javascript animation library without any dependencies. It uses spritesheets and focuses on small size and one special feature: There are many animation-libraries out there, but few/none provide a possibility to not only set the framerate, but set the frame-time for a certain frame specifically (similar to gif-files). In pw-animate-js one provides the place and duration of every frame oneself -- it's also possible to use the same frame twice without the need to have it on the spritesheet twice.

The library was created for a small private project and raises no claim for completeness -- as in that project there were used pretty low-framerate animations due to low hardware-performance (TV), the feature was needed to not have to put the same frame more than one time in the same spritesheet (just because it was shown for a longer duration). Html5 wasn't available.

If you think it's useful for you, feel free to use it. If you think it should provide certain additional features, feel free to comment or fork / create pull requests.

#License

The MIT License (MIT)

Copyright (c) 2015 - Philipp Wittershagen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
