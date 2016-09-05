package com.angular2.rest;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class CoursesController {

	@RequestMapping(value = "courses", method = RequestMethod.GET)
	public List<String> getCourses() {
		return Arrays.asList("Course 1", "Course 2", "Course 3");
	}

}
