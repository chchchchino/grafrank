package com.grafrank.controller;

import com.grafrank.model.Account;
import com.grafrank.model.Admin;
import com.grafrank.model.User;

public class CmdApp {
    public static void main(String[] args) {
        User[] users = new User[2];
        users[0] = new Account();
        users[1] = new Admin();
        users[0].setUsername("janeey");
        users[1].setUsername("johnny");

        System.out.println(users[0].getUsername());
        System.out.println(users[1].getUsername());

    }
}