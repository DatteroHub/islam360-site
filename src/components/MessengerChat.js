import React from 'react';

export default function  MessengerChat() {
    const code = `
    <div id="fb-root"></div>

    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "503654456826675");
      chatbox.setAttribute("logged_in_greeting", "Salam! Come possiamo aiutarti?");
      chatbox.setAttribute("logged_out_greeting", "Salam! Come possiamo aiutarti?");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v14.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    `;
   
    return <div dangerouslySetInnerHTML={{ __html: code }} />;
  }