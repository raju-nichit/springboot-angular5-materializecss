package com.programmingkida.angular5restful.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.programmingkida.angular5restful.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	public User findByEmail(String email) throws Exception;
}
