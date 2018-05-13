/*
 MIT License
 
 Copyright (c) 2018 Michal Duda - https://github.com/vookimedlo/chrome-extension-alza-close-annoying-intecom-popup
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

// Listen for messages
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the specific request... */
    if (msg.text) {
        if (msg.text == "closeIntercom") {
                                     var intercomDialog = document.getElementsByClassName("interComCallMeDialog");
                                     if (intercomDialog.length) {
                                        var intercomDialogCloseBtn = intercomDialog[0].getElementsByClassName("close");
                                        if (intercomDialogCloseBtn.length) {
                                            intercomDialogCloseBtn[0].click();
                                        }
                                     }
        }

        return "";
    }
});
