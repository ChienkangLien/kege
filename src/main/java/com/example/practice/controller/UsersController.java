package com.example.practice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.practice.service.UsersService;
import com.example.practice.vo.UsersVO;

@RestController
@RequestMapping("/UsersController")
public class UsersController {
	@Autowired
	private UsersService usersService;

	@GetMapping
	public ResponseEntity<List<UsersVO>> getUsers() {
		List<UsersVO> list = usersService.getUsers();
		return list != null ? ResponseEntity.ok(list) : ResponseEntity.noContent().build();
	}

	@GetMapping("/{id}")
	public ResponseEntity<UsersVO> getUserById(@PathVariable Integer id) {
		if (id != null && id > 0) {
			UsersVO users = usersService.getUserById(id);
			return users != null ? ResponseEntity.ok(users) : ResponseEntity.noContent().build();
		}
		return ResponseEntity.noContent().build();
	}

	@PostMapping
	public ResponseEntity<UsersVO> insertUser(@RequestBody UsersVO user) {
		if (user != null && !user.getName().isEmpty())
			return ResponseEntity.ok(usersService.insertUser(user));
		return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
	}

	@PutMapping
	public ResponseEntity<UsersVO> updateUser(@RequestBody UsersVO user) {
		if (user != null && !user.getName().isEmpty() && user.getU_id() != null) {
			UsersVO temp = usersService.updateUser(user);
			if (temp != null) {
				return ResponseEntity.ok(temp);
			}
		}
		return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
	}

	@DeleteMapping("/{id}")
	public boolean deleteUser(@PathVariable Integer id) {
		if (id != null && id > 0) {
			return usersService.deleteUser(id);
		}
		return false;
	}
}
