package com.example.practice.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "users")
@Component
public class UsersVO {
	@Id
	@Column(name = "U_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer u_id;

	@Column(name = "NAME", nullable = false)
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getU_id() {
		return u_id;
	}

	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}

	@Override
	public String toString() {
		return "Users [u_id=" + u_id + ", name=" + name + "]";
	}

	public UsersVO(Integer u_id, String name) {
		super();
		this.u_id = u_id;
		this.name = name;
	}

	public UsersVO() {
	}
}
