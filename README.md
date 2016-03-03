# jsNoSpam
----------
A simple Javascript library to make it harder for spambots to harvest email addresses from a site.

It achieves this by encoding and obfuscating the email address in the page source, and only decoding it in response to an action by the user:
* User mouses over the obfustated email address.
* User navigates with keyboard to obfuscated email address and presses enter.

Requires developer to manually encode email addresses using [ROT13](http://rot13.com).

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
        xw("bssorngznzzny*tznvy.pbz",true,"show me the email address");
    </script>
    
The parameters are as follow:
* Obfuscated Email: ROT13 encoded email address, (optionally) with the @ replaced with a *
* Require user action:
* ** true: will require user action to reveal email address
* ** false: will show the email address
* Message: Text to over-ride the default text hiding an email address

    

Contribute
----------
This project can be forked from
[Github](https://github.com/Offbeatmammal/jsNoSpam). Please issue pull
requests from feature branches.

License
-------
See Licence file in repo, or refer to http://unlicense.org