<html>
  <head>
  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
    {% block head %}
    <title>{% block title %}{% endblock %} - Auto Form</title>
 
   <link href="/public/css/bootstrap.min14ed.css?v=3.3.6" rel="stylesheet">
    <link href="/public/css/font-awesome.min93e3.css?v=4.4.0" rel="stylesheet">

    <link href="/public/css/animate.min.css" rel="stylesheet">
    <link href="/public/css/style.min862f.css?v=4.1.0" rel="stylesheet">
     
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {% endblock %}
    
  </head>
  <body class="gray-bg">
   <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                         {% block moduletitle %}{% endblock %}
                        <div class="ibox-tools">
                            
                        </div>
                    </div>
                    <div class="ibox-content">
                       {% block content %}{% endblock %}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {% block script %}
        <script src="/public/js/jquery.min.js?v=2.1.4"></script>
        <script src="/public/js/bootstrap.min.js?v=3.3.6"></script>
        <script src="/public/js/content.min.js?v=1.0.0"></script>
     {% endblock %}
  </body>
</html>