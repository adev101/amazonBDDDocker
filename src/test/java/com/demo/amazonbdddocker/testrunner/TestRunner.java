package com.demo.amazonbdddocker.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.demo.amazonbdddocker.core.TestFactory;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/feature"}
,glue= {"com.demo.amazonbdddocker.teststeps"}
,tags= {"@test"}
,plugin= {"html:target/cucumber-html-report","json:target/cucumber.json"})



public class TestRunner {
	
	@AfterClass
	public static void cleanup() {
		TestFactory.driver.close();
		TestFactory.driver.quit();
	}
}
