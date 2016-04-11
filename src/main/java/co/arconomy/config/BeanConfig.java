package co.arconomy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;

/**
 * Created by cornishac on 11/04/2016.
 */

@Configuration
public class BeanConfig {

    @Bean
    public SimpleAsyncTaskExecutor sendMailExecutor() {
        return new SimpleAsyncTaskExecutor();
    }

}

