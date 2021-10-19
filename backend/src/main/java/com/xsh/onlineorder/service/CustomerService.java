package com.xsh.onlineorder.service;

import com.xsh.onlineorder.dao.CustomerDao;
import com.xsh.onlineorder.entity.Cart;
import com.xsh.onlineorder.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired
    private CustomerDao customerDao;

    public void signUp(Customer customer) {
        customer.setEnabled(true);
        customer.setCart(new Cart());
        customerDao.signUp(customer);
    }

    public Customer getCustomer(String email) {
        return customerDao.getCustomer(email);
    }

}
