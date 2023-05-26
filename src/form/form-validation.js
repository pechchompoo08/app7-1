import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormRegister() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmitForm = (event) => {

    }
    const err = { fontSize: 'smaller', color: 'red', marginTop: 3 }

    return (
        <div>
            <div class="container-fluid p-5 bg-primary text-white text-center">
                <h1>Register Member</h1>
            </div>
            <div className="container mt-5 p-3 rounded " style={{ width: '500px', background: 'dark' }}>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div class="form-floating mb-3 mt-3">
                        <input type="text" class="form-control" id="username" placeholder="กรุณากรอกชื่อผู้ใช้งาน" name="username"
                            {...register('username', { required: true, maxLength: 30 })}
                        />
                        {errors.username && <div style={err}>กรุณาระบุชื่อผู้ใช้งาน</div>}

                        <label for="username">Username</label>
                    </div>

                    <div class="form-floating mb-3 mt-3 ">
                        <input type="password" class="form-control" id="pwd" placeholder="กรุณากรอกรหัสผ่าน" name="pwd"
                            {...register('pwd', { required: true, maxLength: 30 })}
                        />
                        {errors.pwd && <div style={err}>กรุณาระบุรหัสผ่าน</div>}

                        <label for="pwd">Password</label>
                    </div>

                    <div class="form-floating mb-3 mt-3 ">
                        <input type="text" class="form-control" id="name" placeholder="กรุณากรอกชื่อ-สกุล" name="name"
                            {...register('name', { required: true, maxLength: 30 })}
                        />
                        {errors.name && <div style={err}>กรุณาระบุชื่อ-สกุล</div>}

                        <label for="name">Name</label>
                    </div>
                    <div class="form-floating mb-3  p-3">
                        <p>gender :</p>
                        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked /> : Male
                        <label class="form-check-label" for="radio1" ></label>
                        <input for="name" type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" /> : Female
                        <label class="form-check-label" for="radio2"></label>
                    </div>
                    <div class="container mt-3">
                        <form action="/action_page.php">
                            <label for="Age ">Age:</label>
                            <select class="form-select" id="sel1" name="sellist1">
                                <label for="Age: ">Age:</label>
                                <option>0-20</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                            </select>
                        </form>
                    </div>

                    <div class="form-floating mb-3 mt-3">
                        <input type="number" class="form-control" id="Salary" name="Salary" step="any"
                            {...register('Salary', { validate: value => parseFloat(value) > 0 })}
                        />
                        {errors.Age && <div style={err}>กรุณาระบุเงินเดือน</div>}

                        <label for="Salary">Salary :</label>
                    </div>

                    <div class="form-floating mb-3 mt-3 ">
                        <input type="email" class="form-control" id="email" placeholder="กรุณากรอก Email" name="email"
                            {...register('email', { required: true, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/ } })}

                        />
                        {errors.email && <div style={err}>กรุณาระบุ Email</div>}

                        <label for="email">Email</label>
                    </div>

                    <div class="form-floating mb-3  p-3">
                        <p>Interested :</p>
                        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked />  game
                        <label class="form-check-label" for="radio1" ></label>
                        <input for="name" type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" />  music
                        <label class="form-check-label" for="radio2"></label>
                        <input for="name" type="radio" class="form-check-input" id="radio3" name="optradio" value="option3" />  book
                        <label class="form-check-label" for="radio3"></label>
                    </div>



                    <button type="submit" class="btn btn-primary" >register</button>
                    <button type="reset" class="btn btn-danger">cancle</button>

                </form>
            </div>
        </div>
    )
}