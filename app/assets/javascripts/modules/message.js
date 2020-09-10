$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messages-path" data-message-id=${message.id}>
          <div class="message-info">
            <div class="info-user-name">
              ${message.user_name}
            </div>
            <div class="info-time">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message-content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="messages-path data-message-id=${message.id}">
        <div class="message-info">
          <div class="info-user-name">
            ${message.user_name}
          </div>
          <div class="info-time">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message-content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messages').append(html);      
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.form-submit').prop('disabled', false);
    })
    .fail(function() {
         alert("メッセージ送信に失敗しました");
     })
  });
});