import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Building2, Phone, ArrowRight, Sparkles, Store, UserCheck } from "lucide-react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('user'); // 'user' or 'store'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    storeName: '',
    storeDescription: '',
    storeCategory: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-2xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">SME Business</h1>
            <p className="text-blue-200">จัดการธุรกิจของคุณได้อย่างง่ายดาย</p>
          </div>

          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-500 hover:bg-white/15">
            {/* Toggle Buttons */}
            <div className="flex bg-white/10 rounded-2xl p-1 mb-8">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  !isSignUp 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                เข้าสู่ระบบ
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  isSignUp 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                สมัครสมาชิก
              </button>
            </div>

            <div className="space-y-6">
            <div className="space-y-6">
              {/* User Type Selection (Sign Up Only) */}
              {isSignUp && (
                <div className="animate-in slide-in-from-top duration-500">
                  <label className="block text-white font-medium mb-4 text-center">เลือกประเภทบัญชี</label>
                  <div className="grid grid-cols-2 gap-3 p-1 bg-white/10 rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setUserType('user')}
                      className={`relative py-4 px-4 rounded-xl font-medium transition-all duration-500 transform ${
                        userType === 'user' 
                          ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-2xl scale-[1.02]' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <UserCheck className={`w-8 h-8 transition-all duration-300 ${
                          userType === 'user' ? 'animate-bounce' : ''
                        }`} />
                        <span className="text-sm">ผู้ใช้งาน</span>
                      </div>
                      {userType === 'user' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-600/20 rounded-xl animate-pulse"></div>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setUserType('store')}
                      className={`relative py-4 px-4 rounded-xl font-medium transition-all duration-500 transform ${
                        userType === 'store' 
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl scale-[1.02]' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Store className={`w-8 h-8 transition-all duration-300 ${
                          userType === 'store' ? 'animate-bounce' : ''
                        }`} />
                        <span className="text-sm">ร้านค้า</span>
                      </div>
                      {userType === 'store' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-xl animate-pulse"></div>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-white/60 text-center mt-2">
                    {userType === 'user' ? 'สำหรับผู้ที่ต้องการใช้บริการ' : 'สำหรับเจ้าของธุรกิจ/ร้านค้า'}
                  </p>
                </div>
              )}

              {/* Sign Up Fields */}
              {isSignUp && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="ชื่อ"
                      />
                    </div>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="นามสกุล"
                      />
                    </div>
                  </div>
                  
                  {/* Conditional Fields Based on User Type */}
                  {userType === 'user' ? (
                    <div className="space-y-6 animate-in slide-in-from-left duration-500">
                      <div className="relative group">
                        <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-green-400 transition-colors" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                          placeholder="บริษัท/องค์กร (ถ้ามี)"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6 animate-in slide-in-from-right duration-500">
                      <div className="relative group">
                        <Store className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-orange-400 transition-colors" />
                        <input
                          type="text"
                          name="storeName"
                          value={formData.storeName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                          placeholder="ชื่อร้านค้า"
                          required
                        />
                      </div>
                      
                      <div className="relative group">
                        <Building2 className="absolute left-4 top-4 w-5 h-5 text-white/50 group-focus-within:text-orange-400 transition-colors" />
                        <textarea
                          name="storeDescription"
                          value={formData.storeDescription}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                          placeholder="รายละเอียดร้านค้า"
                        />
                      </div>

                      <div className="relative group">
                        <Store className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-orange-400 transition-colors" />
                        <select
                          name="storeCategory"
                          value={formData.storeCategory}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        >
                          <option value="" className="text-gray-800">เลือกประเภทร้านค้า</option>
                          <option value="food" className="text-gray-800">อาหารและเครื่องดื่ม</option>
                          <option value="fashion" className="text-gray-800">เสื้อผ้าและแฟชั่น</option>
                          <option value="electronics" className="text-gray-800">อิเล็กทรอนิกส์</option>
                          <option value="beauty" className="text-gray-800">ความงามและสุขภาพ</option>
                          <option value="home" className="text-gray-800">บ้านและสวน</option>
                          <option value="services" className="text-gray-800">บริการ</option>
                          <option value="other" className="text-gray-800">อื่นๆ</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="เบอร์โทรศัพท์"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="อีเมล"
                />
              </div>

              {/* Password Field */}
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="รหัสผ่าน"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-blue-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Confirm Password Field (Sign Up) */}
              {isSignUp && (
                <div className="relative group animate-in slide-in-from-right duration-300">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="ยืนยันรหัสผ่าน"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-blue-400 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              )}

              {/* Remember Me / Forgot Password */}
              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-white/70 hover:text-white cursor-pointer">
                    <input type="checkbox" className="mr-2 rounded" />
                    จดจำการเข้าสู่ระบบ
                  </label>
                  <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                    ลืมรหัสผ่าน?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className={`group w-full py-4 px-6 rounded-2xl font-semibold shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSignUp && userType === 'store' 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-orange-500/25' 
                    : isSignUp && userType === 'user'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 hover:shadow-green-500/25'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-blue-500/25'
                } text-white`}
              >
                <span>
                  {isSignUp 
                    ? (userType === 'store' ? 'เปิดร้านค้า' : 'สร้างบัญชีผู้ใช้')
                    : 'เข้าสู่ระบบ'
                  }
                </span>
                {isSignUp && userType === 'store' ? (
                  <Store className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                ) : isSignUp && userType === 'user' ? (
                  <UserCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
                <Sparkles className="w-4 h-4 animate-pulse" />
              </button>

              {/* Terms (Sign Up) */}
              {isSignUp && (
                <p className="text-xs text-white/60 text-center leading-relaxed animate-in fade-in duration-500">
                  การสมัครสมาชิกหมายความว่าคุณยอมรับ{' '}
                  <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                    ข้อกำหนดการใช้งาน
                  </a>{' '}
                  และ{' '}
                  <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </a>
                </p>
              )}
            </div>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/10 text-white/70 rounded-full">หรือ</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-300 group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-300 group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-white/60 text-sm">
            <p>© 2025 SME Business. สงวนลิขสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}