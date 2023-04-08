package com.example.practice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.practice.repository.UsersRepository;
import com.example.practice.vo.UsersVO;

@Transactional
@Service
public class UsersService {
	@Autowired
	private UsersRepository usersRepository;

	public List<UsersVO> getUsers() {
		return usersRepository.findAll();
	}

	public UsersVO getUserById(Integer id) {
		return usersRepository.findById(id).orElse(null);
	}

	public UsersVO updateUser(UsersVO user) {
		UsersVO temp = usersRepository.findById(user.getU_id()).orElse(null);
		return temp != null ? usersRepository.save(user) : null;
	}
	
	public UsersVO insertUser(UsersVO user) {
		return usersRepository.save(user);
	}

	public boolean deleteUser(Integer id) {
		UsersVO temp = usersRepository.findById(id).orElse(null);
		if (temp != null) {
			usersRepository.deleteById(id);
			return true;
		}
		return false;
	}
}
