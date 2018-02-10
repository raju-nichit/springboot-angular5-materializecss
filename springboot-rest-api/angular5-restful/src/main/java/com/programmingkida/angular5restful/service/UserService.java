package com.programmingkida.angular5restful.service;

import com.programmingkida.angular5restful.model.User;

public interface UserService {
 public User saveUser(User user) throws Exception;
 public User userSignin(User user) throws Exception;
}
