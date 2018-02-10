package com.programmingkida.angular5restful.service;

import java.time.LocalDateTime;

import org.omg.CORBA.UserException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.programmingkida.angular5restful.model.User;
import com.programmingkida.angular5restful.repository.UserRepository;

@Service
public class UserServiceImpl  implements UserService{
	private Logger logger=LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserRepository userRepository;
	
	
	
	@Override
	public User saveUser(User user) throws Exception {
		User userRecord=userRepository.findByEmail(user.getEmail());
		if(userRecord==null) {
			user.setCreatedAt(LocalDateTime.now());
			user=userRepository.save(user);
		}else
		throw new Exception("User alreday registered");
		return user;
	}
	
	@Override
	public User userSignin(User user) throws Exception {
		try {
				logger.info("<-----inside userSignin controller");
				User userRecord=userRepository.findByEmail(user.getEmail());
				if(userRecord==null);
					throw  new Exception("User not registered with this emmail id");
//				return 		?		
		} catch (Exception e) {
			logger.error(e.toString());
			throw e;
		}	
	}
}
