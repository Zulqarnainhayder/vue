<template>
        <div id="login-form" class="container">
            <div class="row">
				<div class="m-auto col-md-4 text-center">
					<form action="#" method="post"> 
						<div class="field-group">
							<span class="fa fa-user"></span>
							<div class="wthree-field">
								<input name="text1" id="text1" type="email" value="" placeholder="Email" required="">
							</div>
						</div>

						<div class="field-group">
							<span class="fa fa-lock"></span>
							<div class="wthree-field">
								<input name="text1" id="text1" type="password" value="" placeholder="Password" required="">
							</div>
						</div>

						<div class="wthree-field">
							<button type="submit" class="btn">Get Started</button>
						</div>

						<div class="row my-3">
							<div class="col-md-6">
								<router-link class="nav-link nav-link-colors" to="/forgetpassword">forgot password?</router-link>
							</div>
							<div class="col-md-6">
								<router-link class="nav-link nav-link-colors" to="/register">Create Account?</router-link>
							</div>
						</div>
					</form>
				</div>
			</div>
        </div>
</template>