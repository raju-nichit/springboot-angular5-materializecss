package com.programmingkida.angular5restful.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.programmingkida.angular5restful.model.User;
import com.programmingkida.angular5restful.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	private Logger logger=LoggerFactory.getLogger(this.getClass());

	
	@Autowired
	private UserService userService;
	@PostMapping("/signup")
	public User userSignup(@Validated@RequestBody User user ) throws Exception {
		logger.info("inside signup controller");
		return userService.saveUser(user);	
	}
	
	
	@PostMapping("/signin")
	public User userSignin(@Validated@RequestBody User user ) throws Exception {
		logger.info("inside signin controller");
		return userService.saveUser(user);	
	}
}
