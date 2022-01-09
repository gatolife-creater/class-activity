function sendMail(address) {

    let mail_adress = document.getElementById("mail-address").value;
    let mail_body = document.getElementById("mail-body").value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jindai.gikabu@gmail.com",
        Password: "7D256C956A92353E9C341946171A57105B0B",
        To: 'jindai.gikabu@gmail.com',
        From: mail_adress,
        Subject: "問い合わせ",
        Body: mail_body
    }).then(
        message => alert(message)
    );
}