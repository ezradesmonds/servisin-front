import React from "react";
import { View, ScrollView, TouchableOpacity, Image, Text, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<View 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#F9F9FF",
					paddingVertical: 24,
					paddingHorizontal: 16,
				}}>
				<View >
					<View 
						style={{
							alignItems: "center",
							marginBottom: 40,
							marginHorizontal: 18,
						}}>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF00",
								borderRadius: 9999,
								padding: 28,
								marginBottom: 16,
								shadowColor: "#004C2433",
								shadowOpacity: 0.2,
								shadowOffset: {
								    width: 0,
								    height: 25
								},
								shadowRadius: 50,
								elevation: 50,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/py8b2nj4_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 40,
									height: 40,
								}}
							/>
						</TouchableOpacity>
						<View 
							style={{
								alignSelf: "stretch",
								paddingTop: 16,
							}}>
							<View 
								style={{
									alignItems: "center",
									paddingTop: 7,
									marginBottom: 8,
								}}>
								<Text 
									style={{
										color: "#003F87",
										fontSize: 36,
										fontWeight: "bold",
									}}>
									{"Booking Successful"}
								</Text>
							</View>
							<View 
								style={{
									paddingVertical: 5,
									paddingHorizontal: 2,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 18,
										textAlign: "center",
									}}>
									{"Your service has been confirmed. A\nprofessional technician will be at your\nlocation shortly."}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							marginBottom: 40,
						}}>
						<View 
							style={{
								flexDirection: "row",
								backgroundColor: "#FFFFFF",
								borderRadius: 12,
								padding: 24,
								marginBottom: 16,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/rwfyabd7_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 64,
									height: 64,
									marginRight: 16,
								}}
							/>
							<View 
								style={{
									flex: 1,
								}}>
								<View 
									style={{
										paddingBottom: 4,
									}}>
									<Text 
										style={{
											color: "#004C24",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Service Type"}
									</Text>
								</View>
								<View 
									style={{
										paddingVertical: 6,
										paddingLeft: 1,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 20,
											fontWeight: "bold",
											width: 124,
										}}>
										{"Premium AC\nMaintenance"}
									</Text>
								</View>
								<View 
									style={{
										paddingVertical: 3,
										paddingHorizontal: 1,
									}}>
									<Text 
										style={{
											color: "#424752",
											fontSize: 14,
										}}>
										{"Residential Deep Cleaning & Filter\nReplacement"}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								alignItems: "center",
								backgroundColor: "#FEA5201A",
								borderColor: "#8653000D",
								borderRadius: 12,
								borderWidth: 2,
								paddingVertical: 26,
								marginBottom: 16,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									alignItems: "center",
									paddingVertical: 5,
								}}>
								<Text 
									style={{
										color: "#865300",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Total Paid"}
								</Text>
							</View>
							<View 
								style={{
									paddingVertical: 4,
									paddingHorizontal: 1,
								}}>
								<Text 
									style={{
										color: "#865300",
										fontSize: 30,
										fontWeight: "bold",
									}}>
									{"$124.50"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 12,
								paddingVertical: 24,
								marginBottom: 16,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/r24l8oxk_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 48,
									height: 48,
									marginLeft: 24,
									marginRight: 16,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
								}}>
								<View 
									style={{
										alignItems: "center",
										paddingVertical: 4,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"Alex Thompson"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/ljtgjpw0_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 11,
											height: 11,
											marginRight: 4,
										}}
									/>
									<View 
										style={{
											paddingVertical: 2,
											paddingHorizontal: 1,
										}}>
										<Text 
											style={{
												color: "#424752",
												fontSize: 12,
											}}>
											{"4.9 (124 reviews)"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#F2F3FC",
								borderRadius: 12,
								paddingVertical: 24,
								marginBottom: 16,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/xmt8mbbb_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 40,
									height: 40,
									marginLeft: 24,
									marginRight: 16,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
								}}>
								<View 
									style={{
										paddingVertical: 3,
										paddingLeft: 1,
										paddingRight: 110,
									}}>
									<Text 
										style={{
											color: "#424752",
											fontSize: 12,
										}}>
										{"Date & Time"}
									</Text>
								</View>
								<View 
									style={{
										alignItems: "center",
										paddingVertical: 4,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"Oct 24, 2023 • 10:30 AM"}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#F2F3FC",
								borderRadius: 12,
								paddingVertical: 24,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/y6ebd1eq_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 40,
									height: 40,
									marginLeft: 24,
									marginRight: 16,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
								}}>
								<View 
									style={{
										paddingVertical: 3,
										paddingRight: 85,
									}}>
									<Text 
										style={{
											color: "#424752",
											fontSize: 12,
										}}>
										{"Service Address"}
									</Text>
								</View>
								<View 
									style={{
										alignItems: "center",
										paddingVertical: 4,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"124 Maple Avenue, Apt 4B"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#0067330D",
							borderColor: "#004C241A",
							borderRadius: 16,
							borderWidth: 1,
							padding: 17,
							marginBottom: 40,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/r46cfoqo_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 16,
								width: 20,
								height: 20,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								flex: 1,
								paddingVertical: 4,
								paddingRight: 13,
							}}>
							<Text 
								style={{
									color: "#004C24",
									fontSize: 14,
								}}>
								{"You can track your technician's real-time\nlocation 30 minutes before the scheduled\ntime."}
							</Text>
						</View>
					</View>
					<View >
						<TouchableOpacity 
							onPress={() => router.push('/bookings')}
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#1E3A8A",
								borderRadius: 12,
								paddingVertical: 14,
								marginBottom: 16,
								shadowColor: "#003F8733",
								shadowOpacity: 0.2,
								shadowOffset: {
								    width: 0,
								    height: 4
								},
								shadowRadius: 6,
								elevation: 6,
							}}>
							<View 
								style={{
									alignItems: "center",
									paddingVertical: 4,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Go to My Bookings"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/8bulo1tv_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 16,
									height: 16,
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={() => router.push('/home')}
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#E7E8F0",
								borderRadius: 12,
								paddingVertical: 10,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/xebc8c8o_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 16,
									height: 18,
									marginRight: 7,
								}}
							/>
							<View 
								style={{
									paddingVertical: 6,
									paddingHorizontal: 1,
								}}>
								<Text 
									style={{
										color: "#191C21",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Back to Home"}
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
