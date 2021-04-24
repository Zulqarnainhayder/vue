<template>
        <div id="register-form" class="container">
            <div class="row">
				<div class="m-auto col-md-6 text-center">
					<form action="#" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="field-group">
                                    <span class="fa fa-user"></span>
                                    <div class="wthree-field">
                                        <input name="text1" id="text1" type="text" value="" placeholder="First Name" required="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-group">
                                    <span class="fa fa-user"></span>
                                    <div class="wthree-field">
                                        <input name="text1" id="text1" type="text" value="" placeholder="Last Name" required="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-group">
                                    <span class="fa fa-email"></span>
                                    <div class="wthree-field">
                                        <input name="text1" id="text1" type="email" value="" placeholder="Email" required="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-group">
                                    <span class="fa fa-lock"></span>
                                    <div class="wthree-field">
                                        <input name="text1" id="text1" type="password" value="" placeholder="Password" required="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-group">
                                    <span class="fa fa-lock"></span>
                                    <div class="wthree-field">
                                        <input name="text1" id="text1" type="password" value="" placeholder="Confirm Password" required="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-6 text-left">
                                        <p class="font-color ml-3">Login as?</p>
                                    </div>

                                    <div class="col-md-6">
                                        <select class="form-control" id="sel1">
                                            <option class="optcolor">Hall Manager</option>
                                            <option class="optcolor">2</option>
                                            <option class="optcolor">3</option>
                                            <option class="optcolor">4</option>
                                         </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12 mt-3">
                                <div class="text-left ml-3">
                                    <input type="checkbox" name="vehicle1" value="Bike">
                                    <label class="font-color ml-2" for="vehicle1"> I agree to raveedar's <a href="#">Privicy Policy.</a></label>
                                </div> 
                                <button type="submit" class="btn">Register</button>
                            </div>
                            <div class="col-md-12 my-3">
                                <span class="font-color">Already have an account? <router-link class="ml-2" to="/login">Login here.</router-link></span>
                            </div>
                        </div>

					</form>
				</div>
			</div>
        </div>
</template>