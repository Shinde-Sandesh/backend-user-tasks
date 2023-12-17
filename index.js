require('./db-connect');

const User = require('./models/users.model');

async function signup(userDetails) {
  try {
    const user = new User(userDetails)
    const newUser = await user.save()
    console.log('New user created:', newUser)
  } catch (error) {
    throw error
  }
}

// Example usage of the signup function
/*signup({
  email: 'example@example.com',
  password: 'password123',
  profilePictureUrl: 'https://example.com/profile.jpg',
  username: 'exampleuser',
  nickname: 'Example Nick',
})*/

async function login(email, password) {
  try {
    const user = await User.findOne({ email })
    if (user && user.password === password) {
      console.log('Logged in user:', user)
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    throw error
  }
}

// Example usage of the login function
/*try {
  login('example@example.com', 'password123')
} catch (error) {
  console.error('Login failed:', error.message)
}*/

async function changePassword(email, oldPassword, newPassword) {
  try {
    const user = await User.findOne({ email })
    if (user && user.password === oldPassword) {
      user.password = newPassword
      await user.save()
      console.log('Password changed for user:', user)
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    throw error
  }
}

// Example usage of the changePassword function
/*try {
  changePassword('example@example.com', 'password123', 'newpassword123')
} catch (error) {
  console.error('Password change failed:', error.message)
}*/

async function updateProfilePicture(email, profilePictureUrl) {
  try {
    const user = await User.findOne({ email })
    if (user) {
      user.profilePictureUrl = profilePictureUrl
      await user.save()
      console.log('Profile picture updated for user:', user)
    } else {
      throw new Error('User not found')
    }
  } catch (error) {
    throw error
  }
}

// Example usage of the updateProfilePicture function
/*try {
  updateProfilePicture('example@example.com', 'https://example.com/new-profile-picture.jpg')
} catch (error) {
  console.error('Profile picture update failed:', error.message)
}*/

async function updateContactDetails(email, updatedContactDetails) {
  try {
    const user = await User.findOne({ email })
    if (user) {
      Object.assign(user, updatedContactDetails)
      const updatedUser = await user.save()
      console.log('Contact details updated for user:', updatedUser)
    } else {
      console.log('error check')
    }
  } catch (error) {
    throw error
  }
}

// Example usage of the updateContactDetails function
/*try {
  updateContactDetails('new@example.com', {
    email: 'new@example.com',
    phoneNumber: 9876543210,
  })
} catch (error) {
  console.error('Contact details update failed:', error.message)
}*/

async function findUserByPhoneNumber (phoneNumber){
  try{
    const user = await User.findOne({phoneNumber})

    if (user) {
      console.log('User found by phone number:', user)
    } else {
      console.log('User not found.')
    }
  }
  catch(error){
    throw error
  }
}

findUserByPhoneNumber('9876543210')