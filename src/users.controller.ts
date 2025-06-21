import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto";

let USERS: CreateUserDto[] = [];

@Controller('/users')
export class UsersController {

   @Post('/create')
   createUser(@Body() createUserDto: CreateUserDto) {
       USERS.push(createUserDto);
       return 'User created successfully';
   }

   @Get('/list')
   listUsers() {
       return USERS;
   }

   @Get('/:id')
   getUserById(@Param('id') id: string) {
       return USERS.find(user => user.id === id);
   }

   @Delete('/:id')
   deleteUser(@Param('id') id:string ) {
    USERS = USERS.filter((user)=> user.id !== id);
        return `User with id ${id} deleted successfully`;
    }

    @Put('/:id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
        const index = USERS.findIndex((user)=> user.id === id)
        if(!index){
            return 'User not found';
        }
        USERS[index] = updateUserDto;
        return `User with id ${id} updated successfully`;
    }
}