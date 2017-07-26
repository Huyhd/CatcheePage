<script>
    $('#signup-form').one('submit',function(){
        var email = encodeURIComponent($('#email').val());
        var ansID = "entry.706696076";
        var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc05HmQDkHEoT0Dq9udrsNJJ1wvvGXDPn3F8N6qjVw-1KxBQw/formResponse';
        var submitRef = '&submit=7588322602044403867';
        var submitURL = (baseURL + ansID + "=" + email + submitRef);
        console.log(submitURL);
        $(this)[0].action=submitURL;
    });
</script>