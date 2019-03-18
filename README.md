# jsNoSpam

A simple Javascript library to make it harder for spambots to harvest email addresses from a site.
Uses 100% client-side javascript so can be deployed where you have no control over the server (eg Weebly or other template hosting sites).

It achieves this by encoding and obfuscating the email address in the page source, and only decoding it in response to an action by the user:
* User mouses over the obfustated email address (can change to require an explicit click).
* User navigates with keyboard to obfuscated email address and presses enter.

The user experience supports mouse, touch, keyboard control and is speech reader compliant (tested with [NVDA](http://www.nvaccess.org/)). Also works on iOS (iPhone and iPad) and Android browsers. (If you find any issues, especially with an assistive technology, please let me know... ideally with a pull request to fix it!).

Requires developer to manually encode email addresses using [ROT13](http://rot13.com) before inclusion in the markup.

The goal is to make the addresses clickable, and not require a user to convert from an image or remove words/change the address in any way.

<b>Caveat:</b> As you do still have the email address in plain text in the javascript there will come a time when a crawler will be able to find and extract it from the DOM if it's worth the effort
(hence the <a href="#note">note below</a>, so a Contact Us form with CATPCHA and other protections will always be more secure.

How to use
----------
Simply copy the script from the <code>&lt;head></code> of the sample document into your page where you want email addresses to be protected.
It must preceed the display of any email addresses (so place it either in the <code>&lt;head></code> of your page, or before the first reference.
    
To encode an email address
--------------------------
* visit [ROT13](http://rot13.com) or similar and encode the address.
* (optionally) replace the @ with a * to further obfuscate the email address.

To display an email address
---------------------------
Insert a small snippet as follows into the source of the web page:

    <script type="text/javascript">
        jsNSemail("rknzcyr*rknzcyr.pbz",true,"show me the email address","styleclass");
    </script>
        
The parameters are as follow:
* Obfuscated Email Address: ROT13 encoded email address
    * (optionally) the @ may be replaced with a * (the rot13 function looks for that)
    * (optionally) when creating the parameter you may further obfuscate it, eg <code>jsNSemail("rknzcyr"+"\*"+"rknzcyr.pbz");</code> or <code>jsNSemail(("zbp.rycznk"+"r\*r"+"ycznkr").split('').reverse().join(''));</code>
* Require User Action:
    * true: will require user action to reveal email address (recommended, default if not supplied)
    * false: will show the email address without requiring interaction
* Message: Text to over-ride the default text hiding an email address. This can either be just text, or HTML (eg includes styling or images). Remember, if using HTML to ensure it is [A11y friendly](http://a11yproject.com/) and suitable for cross-platform display.
* StyleClass:
    * name of the class that should be applied to the email address when visible
    * if _require user action_ is true, this will be the fourth parameter (if you don't want to override the _Message_ simply leave the third parameter as an empty string <code>""</code>). If _require user action_ is false, this will be the third parameter

[See here for live sample](https://obm.one/jsnospam).

Note
----
<b><i>In order to reduce the ease with which spambots can get around this (helping preserve the value for everyone!), please rename the functions <code>jsNSshow</code> and <code>jsNSemail</code> in your deployment, 
and/or consider using a JS minification/uglification service to further obscure things.</b></i>
By requiring the user to interact to expose the email address, you reduce the risk of a DOM crawler finding the mail as it would need to trigger the action.
Also, you don't have to use plain ROT13 as the only encoding scheme. There are simple variations which rotate forward/backward a different number of letters
or you can use a different cipher scheme altogether.


If you do make use of this it would be great it you could comment [here](http://post.offbeatmammal.com/2016/03/06/jsnospam-make-it-harder-for-bots-to-find-your-email-address/) just so I can get an idea of how useful people find this.

If you make use of this and like it and want to give something back... [I wrote a book!](http://amzn.to/1SHjbLI) :)

Contribute
----------
This project can be forked from
[Github](https://github.com/Offbeatmammal/jsNoSpam). Please issue pull
requests from feature branches.

License
-------
See Licence file in repo, or refer to http://unlicense.org
