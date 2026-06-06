import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
import { router } from 'expo-router';

export default (props) => {
	return (
		<View 
			style={{
				flex: 1,
				backgroundColor: "#F8FAFC",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#F9F9FF",
				}}>

				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderRadius: 24,
						padding: 24,
						marginBottom: 24,
						marginHorizontal: 16,
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
							marginRight: 20,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/j0q6i871_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 96,
								height: 96,
							}}
						/>
						<TouchableOpacity 
							style={{
								position: "absolute",
								bottom: -7,
								right: -7,
								backgroundColor: "#FFFFFF00",
								borderRadius: 9999,
								paddingVertical: 5,
								paddingHorizontal: 6,
								shadowColor: "#0000001A",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 4
								},
								shadowRadius: 6,
								elevation: 6,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/17enq56l_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 20,
									height: 20,
								}}
							/>
						</TouchableOpacity>
					</View>
					<View 
						style={{
							flex: 1,
						}}>
						<View >
							<Text 
								style={{
									color: "#003F87",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Alex Thompson"}
							</Text>
						</View>
						<View >
							<Text 
								style={{
									color: "#424752",
									fontSize: 14,
									width: 151,
								}}>
								{"Master Electrician • 8+\nYears Exp."}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingVertical: 8,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#E7E8F0",
									borderRadius: 9999,
									paddingVertical: 2,
									paddingHorizontal: 8,
									marginRight: 8,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/bkgxkeuw_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 11,
										height: 11,
										marginRight: 4,
									}}
								/>
								<View 
									style={{
										paddingVertical: 3,
										paddingHorizontal: 1,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"5.0"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									paddingVertical: 2,
									paddingHorizontal: 1,
								}}>
								<Text 
									style={{
										color: "#727784",
										fontSize: 12,
									}}>
									{"(124 Reviews)"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 24,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							paddingLeft: 8,
							marginBottom: 16,
						}}>
						<Text 
							style={{
								color: "#191C21",
								fontSize: 18,
								fontWeight: "bold",
							}}>
							{"Service Details"}
						</Text>
					</View>
					<View >
						<View 
							style={{
								flexDirection: "row",
								backgroundColor: "#F2F3FC",
								borderRadius: 24,
								paddingVertical: 20,
								marginBottom: 16,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/k0qrha6n_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 24,
									width: 42,
									height: 44,
									marginLeft: 20,
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
										paddingRight: 95,
									}}>
									<Text 
										style={{
											color: "#727784",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Schedule"}
									</Text>
								</View>
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
										{"Monday, 24 Oct 2023"}
									</Text>
								</View>
								<View 
									style={{
										paddingVertical: 4,
										paddingRight: 29,
									}}>
									<Text 
										style={{
											color: "#424752",
											fontSize: 14,
										}}>
										{"09:00 AM - 11:00 AM"}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								backgroundColor: "#F2F3FC",
								borderRadius: 24,
								padding: 20,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/cnzhvh06_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 24,
									width: 40,
									height: 44,
									marginRight: 16,
								}}
							/>
							<View 
								style={{
									flex: 1,
									marginRight: 16,
								}}>
								<View >
									<Text 
										style={{
											color: "#727784",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Service Address"}
									</Text>
								</View>
								<View 
									style={{
										paddingTop: 4,
										paddingRight: 18,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"Grand Emerald Apartment"}
									</Text>
								</View>
								<View >
									<Text 
										style={{
											color: "#424752",
											fontSize: 14,
										}}>
										{"Tower A, Unit 12B, Jakarta"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									alignItems: "center",
									paddingVertical: 24,
								}}>
								<View 
									style={{
										paddingVertical: 3,
										paddingHorizontal: 1,
									}}>
									<Text 
										style={{
											color: "#003F87",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"EDIT"}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						borderRadius: 24,
						marginBottom: 24,
						marginHorizontal: 16,
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
							padding: 24,
						}}>
						<Text 
							style={{
								color: "#191C21",
								fontSize: 18,
								fontWeight: "bold",
							}}>
							{"Price Breakdown"}
						</Text>
					</View>
					<View 
						style={{
							padding: 24,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 16,
							}}>
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
									{"Electrical Maintenance (Base)"}
								</Text>
							</View>
							<View 
								style={{
									paddingVertical: 4,
									paddingHorizontal: 1,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 16,
									}}>
									{"$45.00"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 16,
							}}>
							<View 
								style={{
									alignItems: "center",
									paddingVertical: 4,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 14,
									}}>
									{"Service Fee"}
								</Text>
							</View>
							<View 
								style={{
									paddingVertical: 4,
									paddingHorizontal: 1,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 16,
									}}>
									{"$5.00"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 4,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/a4es8uw0_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 11,
										height: 11,
										marginRight: 5,
									}}
								/>
								<Text 
									style={{
										color: "#004C24",
										fontSize: 14,
									}}>
									{"Promo: NEWUSER10"}
								</Text>
							</View>
							<View 
								style={{
									paddingVertical: 4,
									paddingHorizontal: 2,
								}}>
								<Text 
									style={{
										color: "#004C24",
										fontSize: 16,
									}}>
									{"-$5.00"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								paddingTop: 17,
							}}>
							<View 
								style={{
									alignItems: "center",
									paddingVertical: 5,
								}}>
								<Text 
									style={{
										color: "#191C21",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Total Amount"}
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
										fontSize: 24,
										fontWeight: "bold",
									}}>
									{"$45.00"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 89,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingHorizontal: 8,
							marginBottom: 16,
						}}>
						<View 
							style={{
								paddingVertical: 5,
								paddingHorizontal: 1,
							}}>
							<Text 
								style={{
									color: "#191C21",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"Payment Method"}
							</Text>
						</View>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 3,
							}}>
							<Text 
								style={{
									color: "#003F87",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"ADD NEW"}
							</Text>
						</View>
					</View>
					<View >
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#003F870D",
								borderColor: "#003F87",
								borderRadius: 24,
								borderWidth: 2,
								padding: 18,
								marginBottom: 12,
							}}>
							<TouchableOpacity 
								style={{
									backgroundColor: "#1E3A8A",
									borderRadius: 6,
									padding: 12,
									marginRight: 16,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"VISA"}
								</Text>
							</TouchableOpacity>
							<View 
								style={{
									flex: 1,
									marginRight: 16,
								}}>
								<View >
									<Text 
										style={{
											color: "#191C21",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"•••• •••• •••• 4242"}
									</Text>
								</View>
								<View >
									<Text 
										style={{
											color: "#727784",
											fontSize: 12,
										}}>
										{"Expires 12/25"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									width: 24,
									height: 24,
									borderColor: "#C2C6D4",
									borderRadius: 9999,
									borderWidth: 2,
								}}>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#F2F3FC",
								borderColor: "#00000000",
								borderRadius: 24,
								borderWidth: 2,
								padding: 18,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/hdoqnuz2_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 24,
									width: 48,
									height: 32,
									marginRight: 16,
								}}
							/>
							<View 
								style={{
									flex: 1,
									marginRight: 16,
								}}>
								<View >
									<Text 
										style={{
											color: "#191C21",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"ServisPay Wallet"}
									</Text>
								</View>
								<View >
									<Text 
										style={{
											color: "#004C24",
											fontSize: 12,
										}}>
										{"Balance: $128.50"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									width: 24,
									height: 24,
									borderColor: "#C2C6D4",
									borderRadius: 9999,
									borderWidth: 2,
								}}>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF00",
						paddingTop: 24,
						paddingHorizontal: 24,
						shadowColor: "#003F8726",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: -8
						},
						shadowRadius: 40,
						elevation: 40,
					}}>
					<TouchableOpacity 
						style={{
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
							backgroundColor: "#1E3A8A",
							borderRadius: 24,
							paddingVertical: 20,
							marginBottom: 12,
							shadowColor: "#003F8733",
							shadowOpacity: 0.2,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 6,
							elevation: 6,
						}} onPress={() => router.push('/payment')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 18,
								fontWeight: "bold",
								marginRight: 44,
							}}>
							{"Pay Now"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2udvq8vv_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 24,
								width: 16,
								height: 16,
								marginRight: 86,
							}}
						/>
					</TouchableOpacity>
					<View 
						style={{
							alignItems: "center",
							paddingVertical: 2,
							marginBottom: 40,
						}}>
						<Text 
							style={{
								color: "#727784",
								fontSize: 10,
							}}>
							{"By confirming, you agree to our terms of service"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
