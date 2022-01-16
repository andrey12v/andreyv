<!DOCTYPE html>
<html lang="en" height="100%">
<head>

  <title>Personal Information</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="images/nutri-icon.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  
 <style>

html, body
{
	background-color: #e5e5e5;
	font-size: 18px;
}
.error {color: red;}
.formSection{
	width: 80%;
	height: 95%;
	background-color: #fff; 
	
	padding: 10px;
	float: none;
	display: block;
	margin-left: auto;
	margin-right: auto;
	border-radius: 15px;
}
td{
	padding-right: 20px;
	padding-bottom: 10px;
}

#formHeader
{
	background-color: lightblue;
	
	height: 50px;
}
.contactBtn
{
	background-color: lightblue;
	border: #388bdc;
	width: 120px;
	height: 50px;
	border-radius: 15px;
	
}

.contactBtn:hover
{
	background-color: #F6F6F6;
	border: 5px solid #e5e5e5;
}

.thankYouMsg{
	font-size: 30px;
	color: #2094CD;
	text-align: center;
	font-style: italic;
}

</style>
  
  
</head>
<body>
<?php
	

$nameErr = $hourlyRateErr = $availHoursErr = $phoneNumberErr = $emailErr= "";
$name = $birthDate = $hourlyRate = $availableHours = $phoneNumber = $email = $thankYouMsg = "";
$errors = 0;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
	$name = $_POST["name"];
	if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
		$nameErr = "Only letters and white space are allowed"; 
        $errors=1;
    }
	$birthDate = $_POST["birthDate"];
	
	$hourlyRate = $_POST["hourlyRate"];
	if(!preg_match("/^\d*\.?\d{1,2}$/",$hourlyRate)){
		$hourlyRateErr="Houly rate should match the format $0.00";
		$errors=1;
	}
	if($hourlyRate>300){
		$hourlyRateErr="Please enter valid hourly rate, less than 300";
		$errors=1;
	}
	
	$availableHours = $_POST["availableHours"];
	if($availableHours>70){
		$availHoursErr="Please eneter valid number of hours, less than 70";
		$errors=1;
	}
	
	$phoneNumber = $_POST["phoneNumber"];
	if(!preg_match("/^\(?(\d{3})\)?\-?(\d{3})\-?(\d{4})$/", $phoneNumber)){
		$phoneNumberErr="Please enter valid 10 digit phone number";
		$errors=1;
	}
	
	$email = $_POST["email"];
	if(!preg_match("/[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/", $email)){
		$emailErr="Please enter valid email address";
		$errors=1;
	}
	
}



if (isset($_POST['submit']) &&  $errors==0) {

	$to = "andrey12v@gmail.com";
	$subject = "Global Data";
	$txt = " Name: " . $name . "\n Birth Date: " . $birthDate . "\n Hourly Rate: " . $hourlyRate .
	"\n Available hours per week: " . $availableHours . "\n Phone number: " . $phoneNumber . 
	"\n Email Address: " . $email;
	$headers = "From: " . $email;
	mail($to,$subject,$txt,$headers);
	$thankYouMsg = "The email has been sent successfully!";
	
	$name = $birthDate = $hourlyRate = $availableHours = $phoneNumber = $email = "";

}



?>
<br /><br />

<div class="container">
	<div class="row formSection">
		
		<h2 style="text-align:center"><i>Please fill out personal information</i></h2>
		<br/>
		<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
		
		<table style="margin-bottom: 10px">
			<tr>
				<td>
					Name:
				</td>
				<td>
					<input type="text" name="name" value="<?php echo $name;?>" required >
				</td>
				<td>
					<span class="error"> <?php echo $nameErr; ?></span>
				</td>
			</tr>
			<tr>
				<td>
					Birth Date:
				</td>
				<td>
					<input type="date" name="birthDate" value="<?php echo $birthDate;?>" required ><br />
				</td>
			</tr>
			<tr>
				<td>
					Hourly Rate:
				</td>
				<td>
					<input type="text" placeholder="0.00" name="hourlyRate" value="<?php echo $hourlyRate;?>" required ><br />
				</td>
				<td>
					<span class="error"> <?php echo $hourlyRateErr; ?></span>
				</td>
			</tr>
			<tr>
				<td>
					Available hours per week:
				</td>
				<td>
					<input type="number" name="availableHours" value="<?php echo $availableHours;?>" required >
				</td>
				<td>
					<span class="error"> <?php echo $availHoursErr; ?></span>
				</td>
			</tr>
			<tr>
				<td>
					Phone number:
				</td>
				<td>
					<input type="text" name="phoneNumber" value="<?php echo $phoneNumber;?>" required >
				</td>
				<td>
					<span class="error"> <?php echo $phoneNumberErr; ?></span>
				</td>
			</tr>
			<tr>
				<td>
					Email Address:
				</td>
				<td>
					 <input type="text" name="email" value="<?php echo $email;?>" required >
				</td>
				<td>
					<span class="error"> <?php echo $emailErr; ?></span>
				</td>
			</tr>
			
		 </table>
		  <br />
		  <input type="submit" name="submit" value="Submit" class="contactBtn">  
		  <br /><br />	
		  <div class="thankYouMsg"> <?php echo $thankYouMsg; ?></div>
		  
		</form>
	</div>
</div>

<script>
(function blink() { 
  $('.thankYouMsg').fadeOut(400).fadeIn(400, blink); 
})();
</script>

</body>
</html>
