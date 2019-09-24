(function(views)
{
    var self;

    function NetworkView(presenter)
    {
        this.presenter = presenter;
    }

    Object.defineProperties(NetworkView.prototype,
    {
        init : {
            value: function()
            {

            },
            enumerable: false
        },
        onLogin : {
            value: function(data)
            {
                this.presenter.getNetworks();
            },
            enumerable: false
        },
        onNetworks : {
            value: function(data)
            {
                var self = this;
            },
            enumerable: false
        },
        onNetwork : {
            value: function(data)
            {
                $(".content").html("");
            },
            enumerable: false
        },
        showError : {
            value: function(data)
            {
                if(data.status == "401")
                {
                    $("#login")[0].showModal();
                    $(".drawer .navigation").html("");
                }
                else
                {
                    document.querySelector('#toast').MaterialSnackbar.showSnackbar({message: data.message});
                }
            },
            enumerable: false
        }
    });

    views.NetworkView = NetworkView;
})(blink.views);