package com.example.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.practice.vo.UsersVO;

@Repository
public interface UsersRepository extends JpaRepository<UsersVO, Integer> {

}
