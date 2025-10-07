
<html>
<body>

<h1 id="a"></h1>

<script>
document.getElementById("a").innerHTML = "I love this package";
</script>

</body>
</html>