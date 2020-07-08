<?php


$conn=mysqli_connect("127.0.0.1","root","","expert",3306);
mysqli_query($conn,"SET NAMES utf8");
$sql="SELECT * FROM carousel_1;";
$result=mysqli_query($conn,$sql);
$arr = [];
while(($row=mysqli_fetch_row($result))!=null){
    array_push($arr,$row);
}
echo(json_encode($arr));
mysqli_close($conn);


?>